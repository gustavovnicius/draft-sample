import React from 'react'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import ConnectedAddCommentButton from 'containers/ConnectedAddCommentButton'
import 'draft-js-inline-toolbar-plugin/lib/plugin.css'

const Toolbar = createInlineToolbarPlugin({
  structure: [
    ConnectedAddCommentButton,
  ]
})

export default Toolbar
