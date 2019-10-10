import React from 'react';

class MessageFeed extends React.Component {

  render = () => {
    return (
      <div class="list is-hoverable">
        {
          this.props.messages.map(message => {
            return <p className="list-item" key={message.id}>
            <span className="message-user">{message.user_name}:</span>
            
            <br/>
             {message.text}</p>;
          })
        }
      </div>

    );
  };
}

export default MessageFeed;