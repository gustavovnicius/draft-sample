import React from 'react'
import { connect } from 'react-redux'
import Editor from 'components/Editor'

const mapStateToProps = (state) => {
  return {
    editorState: state.editor.state,
    readOnly: state.editor.readOnly
  }
}

export default connect(mapStateToProps)(Editor)
