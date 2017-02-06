import React from 'react'
import renderer from 'react-test-renderer'
import CommentsList from 'components/CommentsList.js'

describe('CommentsList', () => {
  it('renders', () => {
    const comments = {
      0: {
        data: {
          comment: '',
          saved: false
        },
        mutability: 'MUTABLE',
        type: 'COMMENT'
      }
    }
    const app = renderer.create(
      <CommentsList comments={comments} />
    )
    const tree = app.toJSON()

    expect(tree).toMatchSnapshot()
  });
});
