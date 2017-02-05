import { EditorState } from 'draft-js'

function editor(state = EditorState.createEmpty(), action) {
  switch (action.type) {
    default:
      return state
  }
}

export default editor
