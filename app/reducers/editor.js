import { EditorState } from 'draft-js'

const initialState = {
  state: EditorState.createEmpty(),
  readOnly: false
}

function editor(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default editor
