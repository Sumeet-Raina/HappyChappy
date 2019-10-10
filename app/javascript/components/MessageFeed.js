import React from 'react';

class MessageFeed extends React.Component {

  render = () => {
    return (
      <div class="list is-hoverable">
        {
          this.props.messages.map(message => {
            return <p className="list-item" key={message.id}>{message.user_name}: {message.text}</p>;
          })
        }
      </div>

    );
  };
}

export default MessageFeed;