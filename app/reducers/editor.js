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
    case editorActions.SET_STATE:
      return {
        ...state,
        state: action.editorState,
        entities: convertToRaw(action.editorState.getCurrentContent()).entityMap
      }
    case editorActions.SAVE_COMMENT:
      const contentState = state.state.getCurrentContent()
      const newContentState = contentState.mergeEntityData(action.commentData.key, action.commentData)
      const newEditorState = EditorState.push(
        state.state,
        newContentState,
        'apply-entity'
      )

      return {
        ...state,
        state: newEditorState,
        entities: convertToRaw(newEditorState.getCurrentContent()).entityMap
      }
    default:
      return state
  }
}

export default editor
