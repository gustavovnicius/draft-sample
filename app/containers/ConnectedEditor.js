import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertToRaw } from 'draft-js'
import EditorWithPlugins from 'draft-js-plugins-editor'
import Toolbar from 'plugins/Toolbar'
import * as editorActions from 'actions/editor'

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

const mapStateToProps = (state) => {
  return {
    editorState: state.editor.state,
    readOnly: state.editor.readOnly
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (state) => dispatch(editorActions.setState(state))
  }
}

class ConnectedEditor extends Component {
  render() {
    return (
      <div style={styles.editor} onClick={() => this.editor.focus()}>
        <EditorWithPlugins
          ref={editor => this.editor = editor}
          editorState={this.props.editorState}
          plugins={[Toolbar]}
          readOnly={false}
          onChange={this.props.setState}
        />
        <Toolbar.InlineToolbar />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedEditor)
