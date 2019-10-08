import React, { Component } from "react"
import ChuckNorrisFact from './ChuckNorrisFact'
import RandomJoke from './RandomJoke'
import RandomMeme from './RandomMeme'
import axios from 'axios'
import bot from '../../assets/images/bot_avatar'
import user_avatar from '../../assets/images/like'
import PieChart from 'react-minimal-pie-chart';
import { passCsrfToken } from '../util/helpers'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import { SIGXFSZ } from "constants";

class Index extends React.Component {


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
    this.setState({
      currentMood: mood
    })
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

  getHappy = () => {
    return this.state.happy
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


  theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',

  };

  sadMoodAdvice() {
    const advices = ["It’s okay to feel sad.", "Remember it’s temporary.",
      "It’s normal to feel sad.", "What the one way you can take care of yourself right now?", "It’s okay to feel sad. Be brave, reachout to someone or write your thoughts down on paper."
    ]

    const index = Math.floor(Math.random * advices.length)
    console.log(advices[index])
    return `${advices[index]}`
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
      message: "That's great!Share your good vibes, send a text to someone you like.",
      trigger: '8'
    }, {
      id: '5',
      message: 'Close your eyes and take 10 deep breaths with a smile on your face and see how you feel.',
      trigger: '8'
    },
    {
      id: '8',
      options: [
        { value: 1, label: 'Chuck Norris Fact', trigger: 'chuck' },
        { value: 2, label: 'Random Joke', trigger: 'joke' },
        { value: 3, label: 'Random Meme', trigger: 'meme' },
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
      id: '6',
      message: 'Wohoo! Do a silly dance.',
      trigger: '9'
    }, {
      id: '9',
      message: 'What would you like to check?',
      trigger: '8'
    }, {
      id: '7',
      message: 'It’s okay to feel sad. Be brave, reachout to someone or write your thoughts down on paper.',
      trigger: '8'
    }, {
      id: 'end',
      options: [
        { value: 1, label: 'See statistics', trigger: 'stats' },
      ],
    }, {
      id: 'stats',
      component: (
        <PieChart
          data={[
            { title: 'Okay', value: this.state.okay, color: '#C13C37' },
            { title: 'Happy', value: this.state.happy, color: '#E38627' },
            { title: 'Silly', value: this.state.silly, color: '#6A4335' },
            { title: 'Sad', value: this.state.sad, color: '#6A2135' }
          ]}
          style={{ height: '15vw' }}
          label
          animate
          labelStyle={{
            fontSize: '10px',
            fontColor: '#FFFFFF',
            fontFamily: 'sans-serif',
            fill: '#121212'
          }}
        />
      ),
      end: true
    }
  ]


  config = {
    width: "70vw",
    height: "80vh",

  };
  render() {
    return (

      <div className='mood-container'>
        <h1>hello happy chappy</h1>
        <div className="chat-container">
          <ThemeProvider theme={this.theme}>
            <ChatBot userAvatar={user_avatar} botAvatar={bot} headerTitle='Happy Chappy' happy={this.state.happy} steps={this.steps} {...this.config} />
          </ThemeProvider >
        </div>
      </div>
    );
  }
}

export default Index


