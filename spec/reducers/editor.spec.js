import { EditorState } from 'draft-js'
import editor from 'reducers/editor';

describe('editor reducer', () => {
  it('defines an editor state by default', () => {
    const dummyAction = { type: 'DUMMY' }

    expect(editor(undefined, dummyAction)).toEqual(expect.any(EditorState))
  })
})
