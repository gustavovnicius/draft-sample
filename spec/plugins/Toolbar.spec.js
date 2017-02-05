import React from 'react'
import renderer from 'react-test-renderer'
jest.mock('containers/ConnectedAddCommentButton')

import Toolbar from 'plugins/toolbar';

describe('Toolbar', () => {
  describe('plugin object', () => {
    it('matches the expected structure', () => {
      const expected = {
        InlineToolbar: expect.any(Function),
        initialize: expect.any(Function),
        onChange: expect.any(Function)
      }

      expect(Toolbar).toEqual(expected)
    })
  })

  describe('decorated component', () => {
    it('matches the snapshot', () => {
      const component = renderer.create(
        <Toolbar.InlineToolbar />
      )
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    })
  })
})
