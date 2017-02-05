import React from 'react'
import renderer from 'react-test-renderer'
import App from 'containers/App'
jest.mock('draft-js')
jest.mock('draft-js-plugins-editor')

describe('App', () => {
  it('renders', () => {
    const app = renderer.create(<App />);

    expect(app).toBeTruthy()
  });
});
