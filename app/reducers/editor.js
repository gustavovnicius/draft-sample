import {
  EditorState,
  convertToRaw,
  getEntitySelectionState,
  Modifier
} from 'draft-js'
import * as editorActions from 'actions/editor'
import decorator from 'plugins/decorator'

const initialState = {
  state: EditorState.createEmpty(),
  readOnly: false
}

function editor(state = initialState, action) {
  switch (action.type) {
    case editorActions.SET_STATE: return setEditorState(state, action)
    case editorActions.SET_COMMENT_FOCUS: return setCommentFocus(state, action)
    case editorActions.ADD_COMMENT: return addComment(state)
    case editorActions.SAVE_COMMENT: return saveComment(state, action)
    case editorActions.REMOVE_COMMENT: return removeComment(state, action)
    default: return state
  }
}

function setEditorState(state, action) {
  return {
    ...state,
    state: action.editorState,
    entities: convertToRaw(action.editorState.getCurrentContent()).entityMap
  }
}

function setCommentFocus(state, action) {
  const newEditorState = EditorState.forceSelection(
    state.state,
    action.commentData.selectionState
  )

  // It's a bit ugly, I know. Still thinking about how to take this off of here
  document.getElementById(`comment_${action.commentData.key}`).scrollIntoView()

  return prepareStateWithEntities(state, newEditorState)
}

function addComment(state) {
  const contentState = state.state.getCurrentContent()
  const contentStateWithEntity = contentState.createEntity(
    'COMMENT',
    'IMMUTABLE',
    {
      comment: '',
      saved: false,
      selectionState: state.state.getSelection()
    }
  )
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
  const newContentStateWithEntity = contentStateWithEntity.mergeEntityData(entityKey, { key: entityKey })
  const newEditorState = EditorState.moveFocusToEnd(
    EditorState.push(
      state.state,
      Modifier.applyEntity(
        newContentStateWithEntity,
        state.state.getSelection(),
        entityKey
      ),
      'apply-entity'
    )
  )
  return prepareStateWithEntities(state, newEditorState)
}

function saveComment(state, action) {
  let contentState = state.state.getCurrentContent()
  let newContentState = contentState.mergeEntityData(action.commentData.key, action.commentData)
  let newEditorState = EditorState.push(
    state.state,
    newContentState,
    'apply-entity'
  )

  return prepareStateWithEntities(state, newEditorState)
}

function removeComment(state, action) {
  let contentState = state.state.getCurrentContent()
  let newContentState = Modifier.applyEntity(contentState, action.commentData.selectionState, null)
  let newEditorState = EditorState.push(
    state.state,
    newContentState,
    'apply-entity'
  )

  return prepareStateWithEntities(state, newEditorState)
}

function prepareStateWithEntities(oldState, newEditorState) {
  return {
    ...oldState,
    state: decorateState(newEditorState),
    entities: convertToRaw(newEditorState.getCurrentContent()).entityMap
  }
}

function decorateState(editorState) {
  return EditorState.set(editorState, { decorator: decorator })
}

export default editor
