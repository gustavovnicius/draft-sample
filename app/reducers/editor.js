import {
  EditorState,
  convertToRaw,
  getEntitySelectionState,
  Modifier
} from 'draft-js'
import * as editorActions from 'actions/editor'

const initialState = {
  state: EditorState.createEmpty(),
  readOnly: false
}

function editor(state = initialState, action) {
  switch (action.type) {
    case editorActions.SET_STATE: return setEditorState(state, action)
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

function saveComment(state, action) {
  let contentState = state.state.getCurrentContent()
  let newContentState = contentState.mergeEntityData(action.commentData.key, action.commentData)
  let newEditorState = EditorState.push(
    state.state,
    newContentState,
    'apply-entity'
  )

  return {
    ...state,
    state: newEditorState,
    entities: convertToRaw(newEditorState.getCurrentContent()).entityMap
  }
}

function removeComment(state, action) {
  let contentState = state.state.getCurrentContent()
  let newContentState = Modifier.applyEntity(contentState, action.commentData.selectionState, null)
  let newEditorState = EditorState.push(
    state.state,
    newContentState,
    'apply-entity'
  )
  return {
    ...state,
    state: newEditorState,
    entities: convertToRaw(newEditorState.getCurrentContent()).entityMap
  }
}

export default editor
