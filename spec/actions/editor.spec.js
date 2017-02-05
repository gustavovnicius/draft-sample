import * as editorActions from 'actions/editor';

describe('editor actions', () => {
  it('creates an setState action', () => {
    const expected = {
      type: editorActions.SET_STATE,
      editorState: 'a state'
    }

    expect(editorActions.setState('a state')).toEqual(expected)
  })
})
