import React from 'react'

const CommentDecorator = (props) => {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default CommentDecorator
