import React from 'react'
import _ from 'lodash'
import Comment from 'components/Comment'

const styles = {
  comments: {
    backgroundColor: '#fff',
    padding: '2em',
    boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.18)',
    minHeight: '5vh',
    minWidth: '55vw',
  },
  list: {

  }
}

const CommentsList = ({comments}) => {
  return (
    <div style={styles.comments}>
      <h3>Comments</h3>
      <div style={styles.list}>
        {
          _.map(comments, (comment, key) => {
            return <Comment key={key} comment={comment} />
          })
        }
      </div>
    </div>
  )
}

export default CommentsList
