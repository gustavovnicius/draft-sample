import React from 'react'
import { CompositeDecorator } from 'draft-js'

const decorator = new CompositeDecorator([
  {
    strategy: (contentBlock, callback, contentState) => {
      contentBlock.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'COMMENT'
          )
        },
        callback
      )
    },
    component: (props) => {
      return (
        <span id={`comment_${props.entityKey}`}>
          {props.children}
        </span>
      )
    }
  }
])

export default decorator
