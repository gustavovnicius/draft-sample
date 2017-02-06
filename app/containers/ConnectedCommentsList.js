import React from 'react'
import { connect } from 'react-redux'
import CommentsList from 'components/CommentsList'

const mapStateToProps = (state) => {
  return {
    comments: state.editor.entities
  }
}

export default connect(mapStateToProps)(CommentsList)
