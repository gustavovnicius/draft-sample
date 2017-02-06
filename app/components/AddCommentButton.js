import React, { Component } from 'react'
import { RichUtils, EditorState, Modifier } from 'draft-js'


class AddCommentButton extends Component {
  addComment() {
    const contentState = this.props.editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'COMMENT',
      'IMMUTABLE',
      {
        comment: '',
        saved: false,
        selectionState: this.props.editorState.getSelection()
      }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newContentStateWithEntity = contentStateWithEntity.mergeEntityData(entityKey, { key: entityKey })
    const newEditorState = EditorState.push(
      this.props.editorState,
      Modifier.applyEntity(
        newContentStateWithEntity,
        this.props.editorState.getSelection(),
        entityKey
      ),
      'apply-entity'
    )

    this.props.setEditorState(newEditorState)
  }

  render() {
    return (
      <div
        className={this.props.theme.buttonWrapper}
        onMouseDown={(event) => event.preventDefault()}
      >
        <button
          className={this.props.theme.button}
          onClick={() => this.addComment()}
          type="button"
        >
          <svg height="24" viewBox="0 0 24 24" width="24">
            <path fill="#000000" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z" />
          </svg>
        </button>
      </div>
    )
  }
}

export default AddCommentButton
