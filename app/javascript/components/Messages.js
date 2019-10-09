import React from 'react';

class ChatRoom extends React.Component {

  render = () => {
    return (
      <ul>
        {
          this.props.messages.map(message => {
            return <li key={message.id}>{message.user_name}: {message.text}</li>;
          })
        }
      </ul>

    );
  };
}

export default ChatRoom;