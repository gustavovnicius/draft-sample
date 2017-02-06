import React, { Component } from 'react'
import { InlineForm } from 'rebass'

const styles = {
}

class Comment extends Component {
  render() {
    if (this.props.comment.saved) {
      return this.renderSavedComment()
    }

    return this.renderUnsavedComment()
  }

  renderSavedComment() {

  }

  renderUnsavedComment() {
    return (
      <div>
        <InlineForm
          label="Write a comment"
          placeholder="Write a comment"
          name="comment"
          buttonLabel="Save"
        />
      </div>
    )
  }
}

export default Comment
