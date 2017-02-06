import React from 'react'
import renderer from 'react-test-renderer'
import Comment from 'components/Comment.js'

describe('Comment', () => {
  it('renders', () => {
    const comment = {
      data: {
        comment: '',
        saved: false
      },
      mutability: 'MUTABLE',
      type: 'COMMENT'
    }
    const app = renderer.create(
      <Comment comment={comment} />
    )
    const tree = app.toJSON()

    expect(tree).toMatchSnapshot()
  });
});
