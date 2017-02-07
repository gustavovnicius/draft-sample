import * as editorActions from 'actions/editor';

describe('editor actions', () => {
  it('creates an setState action', () => {
    const expected = {
      type: editorActions.SET_STATE,
      editorState: 'a state'
    }

    expect(editorActions.setState('a state')).toEqual(expected)
  })

  it('creates an setCommentFocus action', () => {
    const expected = {
      type: editorActions.SET_COMMENT_FOCUS,
      commentData: {}
    }

    expect(editorActions.setCommentFocus({})).toEqual(expected)
  })

  it('creates an addComment action', () => {
    const expected = {
      type: editorActions.ADD_COMMENT,
    }

    expect(editorActions.addComment()).toEqual(expected)
  })

  it('creates an saveComment action', () => {
    const commentData = {
      saved: true,
      comment: 'A comment'
    }
    const expected = {
      type: editorActions.SAVE_COMMENT,
      commentData
    }

    expect(editorActions.saveComment(commentData)).toEqual(expected)
  })

  it('creates an removeComment action', () => {
    const commentData = {
      saved: true,
      comment: 'A comment'
    }
    const expected = {
      type: editorActions.REMOVE_COMMENT,
      commentData
    }

    expect(editorActions.removeComment(commentData)).toEqual(expected)
  })
})
