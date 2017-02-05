import React from 'react'
import renderer from 'react-test-renderer'
import App from 'containers/App.js'

describe('App', () => {
  it('renders', () => {
    const app = renderer.create(<App />);

    expect(app).toBeTruthy()
  });
});
