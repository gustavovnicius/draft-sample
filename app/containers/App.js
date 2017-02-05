import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from 'reducers'
import AppContainer from 'components/AppContainer'
import ConnectedEditor from 'containers/ConnectedEditor'

const store = createStore(reducers)

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <ConnectedEditor />
      </AppContainer>
    </Provider>
  )
}

export default App;
