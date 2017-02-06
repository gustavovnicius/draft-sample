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
    const setStateAction = {
      type: 'SET_STATE',
      editorState: EditorState.createEmpty()
    }
    const expected = {
      state: expect.any(EditorState),
      readOnly: false,
      entities: {}
    }

    expect(editor(undefined, setStateAction)).toEqual(expected)
  })
})
