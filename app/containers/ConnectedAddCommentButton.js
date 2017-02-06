import React from 'react'
import { connect } from 'react-redux'
import AddCommentButton from 'components/AddCommentButton'
import * as editorActions from 'actions/editor'

const mapStateToProps = (state) => {
  return {
    editorState: state.editor.state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEditorState: (state) => dispatch(editorActions.setState(state)),
    addComment: () => dispatch(editorActions.addComment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentButton)
