import React, { Component } from "react"
import ChuckNorrisFact from './ChuckNorrisFact'
import RandomJoke from './RandomJoke'
import RandomMeme from './RandomMeme'
import FortuneCookie from './FortuneCookie'
import axios from 'axios'
import bot from '../../assets/images/bot_avatar'
import PieChart from 'react-minimal-pie-chart';
import { passCsrfToken } from '../util/helpers'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import ChatRoom from './ChatRoom'
import MoodPieChart from "./MoodPieChart";
import { theme } from '../constants';
import { config } from '../constants';
import { steps } from '../constants';

class App extends React.Component {



  state = {
    happy: 25,
    sad: 25,
    silly: 25,
    okay: 25,
    currentMood: ""
  }

  componentDidMount() {
    passCsrfToken(document, axios)
    this.setMoods(this)
  }

  handleClick = (mood) => {
    let currentMood = { currentMood: mood }
    this.createMood(currentMood, this.setMoods)
  }

  createMood(currentMood, callback) {
    axios
      .post('/api/moods', currentMood)
      .then(response => {
        console.log(response)
        console.log(response.data)
        callback(this)
      })
      .catch(error => {
        console.log(error)
      })
  }



  getMood = () => {
    return this.state.currentMood
  }

  setMoods(self) {
    axios
      .get('/api/moods')
      .then(response => {
        self.setState({
          happy: response.data.happy,
          sad: response.data.sad,
          okay: response.data.okay,
          silly: response.data.silly,
          currentMood: response.data.currentMood
        });
      })
  }
  steps = [
    {
      id: '1',
      message: 'Hello! Great to have you here!',
      trigger: '2',
    },
    {
      id: '2',
      message: 'How are you feeling today?',
      trigger: '3'
    },
    {
      id: '3',
      options: [
        {
          value: "😊 happy", label: '😊', trigger: () => {
            this.handleClick('happy');
            return '4'
          }
        },
        {
          value: "😐 okay", label: '😐', trigger: () => {
            this.handleClick('okay');
            return '5'
          }
        },
        {
          value: "🤪 silly", label: '🤪', trigger: () => {
            this.handleClick('silly');
            return '6'
          }
        },
        {
          value: "😔 sad", label: '😔', trigger: () => {
            this.handleClick('sad');
            return '7'
          }
        }
      ]
    },
    {
      id: '4',
      message: "That's great! Why not share your good vibes, and send a nice text to someone you like.",
      trigger: '9'
    }, {
      id: '5',
      message: 'A-OK! Try this: close your eyes and take 10 deep breaths with a smile on your face. Then see how you feel :)',
      trigger: '9'
    },
    {
      id: '8',
      options: [
        { value: 1, label: 'Chuck Norris Fact', trigger: 'chuck' },
        { value: 2, label: 'Random Joke', trigger: 'joke' },
        { value: 3, label: 'Random Meme', trigger: 'meme' },
        { value: 4, label: 'Fortune Cookie', trigger: 'fortune' },
      ]
    }, {
      id: 'chuck',
      component: (
        <ChuckNorrisFact />
      ),
      trigger: 'end'
    }, {
      id: 'joke',
      component: (
        <RandomJoke />
      ),
      trigger: 'end'
    }, {
      id: 'meme',
      component: (
        <RandomMeme />
      ),
      trigger: 'end'
    }, {
      id: 'fortune',
      component: (
        <FortuneCookie />
      ),
      trigger: 'end'
    }, {
      id: '6',
      message: 'Woohoo! Me too! Let\'s do a silly dance.',
      trigger: '9'
    }, {
      id: '9',
      message: "What can I show you now?",
      trigger: '8'
    }, {
      id: '7',
      message: "It’s okay to feel sad. Be brave and reach out to someone, or write your thoughts down on paper. It might help :)",
      trigger: '9'
    }, {
      id: 'end',
      options: [
        { value: 1, label: 'view your mood chart', trigger: 'stats' },
      ],
    }, {
      id: 'stats',
      component: (
        <MoodPieChart
          data={this.state}
        />),
      trigger: 'chat'
    }, {
      id: 'chat',
      component: (
        <ChatRoom currentMood={this.state.currentMood} getMood={this.getMood}/>
      ),
      end: true
    }
  ]



  render() {
    return (

      <div className='mood-container'>
        <h1 className='title'>hello happy chappy</h1>
        <div className="chat-container">
          <ThemeProvider theme={theme}>
            <ChatBot botAvatar={bot} headerTitle='Happy Chappy' steps={this.steps} {...config} />
          </ThemeProvider >
        </div>
      </div>
    );
  }
}



export default App


