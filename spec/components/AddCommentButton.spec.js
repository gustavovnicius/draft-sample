import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import { EditorState } from 'draft-js'
import AddCommentButton from 'components/AddCommentButton'

describe('AddCommentButton', () => {
  it('renders', () => {
    const component = renderer.create(
      <AddCommentButton
        theme={{ buttonWrapper: '', button: '' }}
        onClick={f => f}
      />
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('creates an Editor Entity on click', () => {
    const spy = jest.fn()

    const component = shallow(
      <AddCommentButton
        theme={{ buttonWrapper: '', button: '' }}
        editorState={EditorState.createEmpty()}
        setEditorState={spy}
      />
    )

    component.instance().addComment()

    expect(spy).toBeCalledWith(expect.any(EditorState));
  })
})
