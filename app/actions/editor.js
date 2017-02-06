export const SET_STATE = 'SET_STATE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SAVE_COMMENT = 'SAVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const setState = (state) => {
  return {
    type: SET_STATE,
    editorState: state
  }
}

export const addComment = () => {
  return {
    type: ADD_COMMENT
  }
}

export const saveComment = (commentData) => {
  return {
    type: SAVE_COMMENT,
    commentData
  }
}

export const removeComment = (commentData) => {
  return {
    type: REMOVE_COMMENT,
    commentData
  }
}
