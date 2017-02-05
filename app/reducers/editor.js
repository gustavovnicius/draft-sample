import { EditorState } from 'draft-js'
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
        state: action.editorState
      }
    default:
      return state
  }
}

export default editor
