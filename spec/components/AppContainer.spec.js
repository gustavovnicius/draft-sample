import React from 'react'
import renderer from 'react-test-renderer'
import AppContainer from 'components/AppContainer.js'

describe('AppContainer', () => {
  it('renders', () => {
    const app = renderer.create(
      <AppContainer>
        <div> Hello! </div>
      </AppContainer>
    );
    const tree = app.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
