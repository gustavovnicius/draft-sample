import React, { Component } from 'react'
import Draft from 'draft-js'

const styles = {
  editor: {
    backgroundColor: '#fff',
    padding: '2em',
    boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.18)',
    minWidth: '55vw',
    maxWidth: '55vw',
    minHeight: '50vh',
    cursor: 'text',
    margin: '0 0 2em 0'
  }
}

class Editor extends Component {
  render() {
    return (
      <div style={styles.editor} onClick={() => this.editor.focus()}>
        <Draft.Editor
          ref={editor => this.editor = editor}
          editorState={this.props.editorState}
          onChange={f => f}
        />
      </div>
    )
  }
}

export default Editor
