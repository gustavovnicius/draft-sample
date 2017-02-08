import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { ContentState, EditorState } from 'draft-js'
import reducers from 'reducers'
import AppContainer from 'components/AppContainer'
import ConnectedCommentsList from 'containers/ConnectedCommentsList'
import ConnectedEditor from 'containers/ConnectedEditor'

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Pellentesque commodo, nisi ut lacinia maximus, odio nunc " +
                "euismod nunc, non porttitor augue velit et nibh. Donec " +
                "finibus posuere ante id condimentum. Proin in scelerisque " +
                "eros. Quisque sed aliquet enim. Pellentesque a nibh " +
                "faucibus, ultricies turpis in, vehicula eros. Nam in tortor " +
                "lobortis, vestibulum nulla sit amet, vehicula nibh. Etiam " +
                "congue venenatis magna eget egestas."

const initialState = {
  editor: {
    state: EditorState.createWithContent(
      ContentState.createFromText(content)
    ),
    readOnly: false
  }
}

const store = createStore(reducers, initialState)

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <ConnectedEditor />
        <ConnectedCommentsList />
      </AppContainer>
    </Provider>
  )
}

export default App;
