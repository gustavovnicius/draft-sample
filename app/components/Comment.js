import React, { Component } from 'react'
import { Input, Button, Space } from 'rebass'

const styles = {
  commentWrapper: {
    margin: '2em'
  }
}

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    if (this.props.comment.data.saved) {
      return this.renderSavedComment()
    }

    return this.renderUnsavedComment()
  }

  renderSavedComment() {
    return (
      <div style={styles.commentWrapper}>
        <span>{this.props.comment.data.comment}</span>
        <Space x={2} />
        <Button theme='secondary' onClick={() => this.removeComment()}>
          Remove
        </Button>
      </div>
    )
  }

  renderUnsavedComment() {
    return (
      <div style={styles.commentWrapper}>
        <Input
          label=''
          placeholder='Write a comment'
          name='comment'
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <Button theme='primary' onClick={() => this.saveComment()}>
          Save
        </Button>
        <Space x={1} />
        <Button theme='secondary' onClick={() => this.removeComment()}>
          Remove
        </Button>
      </div>
    )
  }

  saveComment() {
    this.props.onSaveComment({
      ...this.props.comment.data,
      saved: true,
      comment: this.state.value
    })
  }

  removeComment() {
    this.props.onRemoveComment(this.props.comment.data.key)
  }
}
