import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Comment from 'components/Comment.js'

describe('Comment', () => {
  let spyOnRemove = undefined
  let spyOnSave = undefined
  let spyOnSetCommentFocus = undefined

  beforeEach(() => {
    spyOnRemove = jest.fn()
    spyOnSave = jest.fn()
    spyOnSetCommentFocus = jest.fn()
  })

  describe('unsaved', () => {
    let comment = undefined
    let commentData = {
      data: {
        comment: '',
        saved: false
      },
      mutability: 'MUTABLE',
      type: 'COMMENT'
    }

    beforeEach(() => {
      comment = shallow(
        <Comment
          comment={commentData}
          onSaveComment={spyOnSave}
          onRemoveComment={spyOnRemove}
          spyOnSetCommentFocus={spyOnSetCommentFocus}
        />
      )
    })

    it('matches the snapshot', () => {
      comment = renderer.create(
        <Comment
          comment={commentData}
          onSaveComment={spyOnSave}
          onRemoveComment={spyOnRemove}
          spyOnSetCommentFocus={spyOnSetCommentFocus}
        />
      )

      const tree = comment.toJSON()

      expect(tree).toMatchSnapshot()
    })

    it('holds the input value', () => {
      const event = {
        target: {
          value: 'a comment'
        }
      }

      comment.find('Input').simulate('change', event)

      expect(comment.instance().state.value).toEqual('a comment')
    })

    it('calls onSave callback', () => {
      comment.find('Button').first().simulate('click')

      expect(spyOnSave).toBeCalled()
    })

    it('calls onRemove callback', () => {
      comment.find('Button').last().simulate('click')

      expect(spyOnRemove).toBeCalled()
    })
  })

  describe('saved', () => {
    let comment = undefined
    let savedCommentData = {
      data: {
        comment: '',
        saved: true
      },
      mutability: 'MUTABLE',
      type: 'COMMENT'
    }

    beforeEach(() => {
      comment = shallow(
        <Comment
          comment={savedCommentData}
          onSaveComment={spyOnSave}
          onRemoveComment={spyOnRemove}
          onSetCommentFocus={spyOnSetCommentFocus}
        />
      )
    })

    it('matches the snapshot', () => {
      comment = renderer.create(
        <Comment
          comment={savedCommentData}
          onSaveComment={spyOnSave}
          onRemoveComment={spyOnRemove}
          onSetCommentFocus={spyOnSetCommentFocus}
        />
      )

      const tree = comment.toJSON()

      expect(tree).toMatchSnapshot()
    })

    it('calls onRemove callback', () => {
      comment.find('Button').simulate('click')

      expect(spyOnRemove).toBeCalled()
    })

    it('calls onSetCommentFocus callback', () => {
      comment.find('span').simulate('click')

      expect(spyOnSetCommentFocus).toBeCalled()
    })
  })
})
