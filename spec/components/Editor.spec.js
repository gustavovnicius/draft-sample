import React from 'react';
import renderer from 'react-test-renderer';
jest.mock('draft-js')

import Editor from 'components/Editor';

describe('Editor', () => {
  it('renders', () => {
    const component = renderer.create(
      <Editor editorState={undefined} />
    )
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
