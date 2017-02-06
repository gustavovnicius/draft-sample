export const SET_STATE = 'SET_STATE'
export const SAVE_COMMENT = 'SAVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const setState = (state) => {
  return {
    type: SET_STATE,
    editorState: state
  }
}

export const saveComment = (commentData) => {
  return {
    type: SAVE_COMMENT,
    commentData
  }
}

export const removeComment = (commentKey) => {
  return {
    type: REMOVE_COMMENT,
    commentKey
  }
}
