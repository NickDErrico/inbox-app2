import React, {Component} from 'react'
import Messages from './Messages'

class MessageList extends Component {

  render() {

    let singleMessage = this.props.messages.map(message =>{
      return (
        <Messages
          key={message.id}
          message={message}
        />
      )
    })
    return (
      <div>{singleMessage}</div>
    )
  }
}


export default MessageList
