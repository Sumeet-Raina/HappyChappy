import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import axios from 'axios';
import Messages from './Messages'

class ChatRoom extends React.Component {
  state = {
    messages: [],
    activeConversation: 1,
    text: ""
  };

  componentDidMount() {
    this.setConversation()
  }

  setConversation = () => {
    if (this.props.getMood() == "okay") {
      this.setState({activeConversation: 1})
    } else if (this.props.getMood() == "happy") {
      this.setState({activeConversation: 2})
    } else if (this.props.getMood() == "silly") {
      this.setState({activeConversation: 3})
    } else {
      this.setState({activeConversation: 4})
    }
  }

  handleReceivedMessage = response => {
    let messages = this.state.messages
    if(messages.every((message) => {
      return message.id != response.message.id
    })) {
      messages.push(response.message)
    }
    this.setState({
      messages: messages
    })
  };

  handleChange = e => {
    console.log(this.state)
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`/api/messages`, {
        text: this.state.text,
        conversation_id: this.state.activeConversation
      })
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <div className="conversationsList">

        <ActionCableConsumer
          channel={{ channel: 'MessagesChannel', conversation: this.state.activeConversation }}
          onReceived={this.handleReceivedMessage}
        />

        <Messages messages={this.state.messages} />

        <div className="newMessageForm">
          <form onSubmit={this.handleSubmit}>
          <label>{this.props.getMood().toUpperCase()} CHAT!</label>
            <label>New Message:</label>
            <br />
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
       </div>
      </div>
    );
  };
}

export default ChatRoom;