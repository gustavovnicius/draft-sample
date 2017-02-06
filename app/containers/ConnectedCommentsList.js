import React from 'react'
import { connect } from 'react-redux'
import CommentsList from 'components/CommentsList'
import * as editorActions from 'actions/editor'

const mapStateToProps = (state) => {
  return {
    comments: state.editor.entities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveComment: (commentData) => dispatch(editorActions.saveComment(commentData)),
    onRemoveComment: (commentKey) => dispatch(editorActions.removeComment(commentKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)
