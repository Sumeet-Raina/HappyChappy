import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import axios from 'axios';
import MessageFeed from './MessageFeed'

class ChatRoom extends React.Component {
  state = {
    messages: [],
    activeConversation: 1,
    text: "",
    currentMood: "happy"
  };

  componentDidMount() {
    this.setMood()
    this.setConversation()
  }

  setMood() {
    this.setState({
      currentMood: this.getMood
    })
  }

  setConversation = () => {
    if (this.isMood('okay')) {
      this.setState({ activeConversation: 1 })
    } else if (this.isMood('happy')) {
      this.setState({ activeConversation: 2 })
    } else if (this.isMood('silly')) {
      this.setState({ activeConversation: 3 })
    } else {
      this.setState({ activeConversation: 4 })
    }
  }

  isMood = (mood) => {
    this.state.currentMood == mood
  }

  handleReceivedMessage = response => {
    let messages = this.state.messages
    if (this.isAlreadyStored(messages, response)) {
      messages.push(response.message)
    }
    this.setState({
      messages: messages
    })
  };

  isAlreadyStored = (messages, response) => {
    return messages.every((message) => {
      return message.id != response.message.id
    })
  }

  handleChange = e => {
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
      <div className={"chat-room-" + this.state.currentMood}>
        <ActionCableConsumer
          channel={{ channel: 'MessagesChannel', conversation: this.state.activeConversation }}
          onReceived={this.handleReceivedMessage}
        />
        <div className="messageFeed field">
          <MessageFeed messages={this.state.messages} />
        </div>

        <div className="newMessageForm field">
          <form onSubmit={this.handleSubmit}>
            <label className='subtitle'>{this.props.getMood().toUpperCase()} CHAT!</label>
            <br />
            <label className='label'>New Message:</label>
            <br />
            <div className="field">
              <input
                className='input textarea'
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <button className='button' type="submit">send message</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default ChatRoom;