import React, { Component } from "react"
import ChuckNorrisFact from './ChuckNorrisFact'
import RandomJoke from './RandomJoke'
import RandomMeme from './RandomMeme'
import axios from 'axios'
import PieChart from 'react-minimal-pie-chart';
import { passCsrfToken } from '../util/helpers'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import { SIGXFSZ } from "constants";

class Index extends React.Component {

  state = {
    happy: 0,
    sad: 0,
    silly: 0,
    okay: 0,
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
      id: "Greet",
      message: "Hello. How are you feeling today?",
      trigger: "Statistics"
    },
    {
      id: "Today",
      options: [
        {
          value: 'happy', label: '🙂 happy', trigger: () => {
            this.handleClick('happy');
            console.log(this.state)
            console.log("-------------------")
            return "happyMood"
          }
        },
        {
          value: 'silly', label: '🤪 silly', trigger: () => {
            this.handleClick('silly');
            return 'sillyMood'
          }
        },
        {
          value: 'okay', label: '😐 okay', trigger: () => {
            this.handleClick('okay');
            return 'okayMood'
          }
        },
        {
          value: 'sad', label: '😔 sad', trigger: () => {
            this.handleClick('sad');
            return "sadMood"
          }
        },
      ],

    }, {
      id: "happyMood",
      message: "That’ great! Share your good vibes,send a happy text to someone you like 📱",
      trigger: "chuckProposition"
    }, {
      id: "sadMood",
      message: "It’s okay to feel sad. Be brave, reachout to someone or write your thoughts down on paper.",
      trigger: "jokeProposition"
    }, {
      id: "sillyMood",
      message: "Do a silly dance 💃🏻 🕺🏾",
      trigger: "memeProposition"
    }, {
      id: "okayMood",
      message: "Close your eyes and take 10 deep breaths with a smile on your face and see how you feel. 🌬",
      trigger: "jokeProposition"
    }, {
      id: 'jokeProposition',
      component: (
        <RandomJoke />
      ),
      trigger: "Diary"
    },
    {
      id: 'memeProposition',
      component: (
        <RandomMeme />
      ),
      trigger: "Diary"
    },
    {
      id: 'chuckProposition',
      component: (
        <ChuckNorrisFact />
      ),
      trigger: "Diary"
    }, {
      id: 'Diary',
      message: 'Describe how you felt today:',
      trigger: 'DiaryEntry'
    }, {
      id: 'DiaryEntry',
      user: true,
      trigger: 'Statistics'
    }, {
      id: 'Statistics',
      component: (
        <div>
          <PieChart
            data={[
              { title: 'Happy', value: 25, color: 'yellow' },
              { title: 'Sad', value: 25, color: 'blue' },
              { title: 'Okay', value: 25, color: 'green' },
              { title: 'Silly', value: 25, color: 'orange' }
            ]}
            label
            labelStyle={{
              fontSize: '5px',
              fontFamily: 'sans-serif'
            }}
            radius={42}
            labelPosition={112}
            animate
          />
        </div>

      ),
      end: true
    },
  ];

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
            <ChatBot headerTitle='Happy Chappy' happy={this.state.happy} steps={this.steps} {...this.config} />
          </ThemeProvider >
        </div>
      </div>
    );
  }
}

export default Index
