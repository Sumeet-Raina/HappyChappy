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
import RandomSadAdvice from './RandomSadAdvice'
import RandomOkayAdvice from './RandomOkayAdvice'
import RandomHappyAdvice from './RandomHappyAdvice'
import RandomSillyAdvice from './RandomSillyAdvice'
import { theme } from '../constants';
import { config } from '../constants';


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
          value: "😊 happy", label: 'happy', trigger: () => {
            this.handleClick('happy');
            return '4'
          }
        },
        {
          value: "😐 okay", label: 'okay', trigger: () => {
            this.handleClick('okay');
            return '5'
          }
        },
        {
          value: "🤪 silly", label: 'silly', trigger: () => {
            this.handleClick('silly');
            return '6'
          }
        },
        {
          value: "😔 sad", label: 'sad', trigger: () => {
            this.handleClick('sad');
            return '7'
          }
        }
      ]
    },
    {
      id: '4',
      component: <RandomHappyAdvice />,
      trigger: '8'
    }, {
      id: '5',
      component: <RandomOkayAdvice />,
      trigger: '8'
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
      component: <RandomSillyAdvice />,
      trigger: '9'
    }, {
      id: '9',
      message: "Hit the button for what you'd like me to show you!",
      trigger: '8'
    }, {
      id: '7',
      component: <RandomSadAdvice />,
      trigger: '8'
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
        <ChatRoom currentMood={this.state.currentMood} getMood={this.getMood} />
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


