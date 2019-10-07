import React, { Component } from "react"
import ChuckNorrisFact from './ChuckNorrisFact'
import RandomJoke from './RandomJoke'
import RandomMeme from './RandomMeme'
import axios from 'axios'
import PieChart from 'react-minimal-pie-chart';
import { passCsrfToken } from '../util/helpers'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

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
      trigger: "Today"
    },
    {
      id: "Today",
      options: [
        {
          value: 'happy', label: '🙂 happy', trigger: () => {
            this.handleClick('happy');
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
      )
    },
    {
      id: 'memeProposition',
      component: (
        <RandomMeme />
      )
    },
    {
      id: 'chuckProposition',
      component: (
        <ChuckNorrisFact />
      )
    }
  ];

  config = {
    width: "70vw",
    height: "80vh",

  };
  render() {
    return (

      <div className='mood-container'>
        {/* <h1 className='welcome-sentence title is-1'>Hello.
        <br />
          How are you feeling today?</h1>
        <div className="mood-wrapper">
          <Mood moodType='happy' moodImage={happy} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
          <Mood moodType='okay' moodImage={okay} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
          <Mood moodType='silly' moodImage={silly} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
          <Mood moodType='sad' moodImage={sad} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
        </div>
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
        <div className="entertainment-container">
          <ChuckNorrisFact />
          <RandomJoke />
          <RandomMeme />
        </div> */}
        <h1>hello happy chappy</h1>

        <div className="chat-container">
          <ThemeProvider theme={this.theme}>
            <ChatBot steps={this.steps}  {...this.config} />
          </ThemeProvider >
        </div>
      </div>
    );
  }
}

export default Index
