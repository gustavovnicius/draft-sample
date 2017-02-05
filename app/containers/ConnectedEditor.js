import React from 'react'
import { connect } from 'react-redux'
import Editor from 'components/Editor'

const mapStateToProps = (state) => {
  return {
    editorState: state.editor
  }
}

export default connect(mapStateToProps)(Editor)
