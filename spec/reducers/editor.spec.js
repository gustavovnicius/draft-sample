import { EditorState } from 'draft-js'
import editor from 'reducers/editor';

describe('editor reducer', () => {
  it('defines an editor state by default', () => {
    const dummyAction = { type: 'DUMMY' }
    const expected = {
      state: expect.any(EditorState),
      readOnly: false
    }

    expect(editor(undefined, dummyAction)).toEqual(expected)
  })

  it('accepts a SET_STATE action', () => {
    const setStateAction = { type: 'SET_STATE', editorState: 'a state' }
    const expected = {
      state: 'a state',
      readOnly: false
    }

    expect(editor(undefined, setStateAction)).toEqual(expected)
  })
})
