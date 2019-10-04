import React from "react"
import Mood from './Mood'
import ChuckNorrisFact from './ChuckNorrisFact'
import RandomJoke from './RandomJoke'
import RandomMeme from './RandomMeme'
import sad from '../../assets/images/sad'
import happy from '../../assets/images/happy'
import okay from '../../assets/images/okay'
import silly from '../../assets/images/silly'
import axios from 'axios'
import PieChart from 'react-minimal-pie-chart';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { passCsrfToken } from '../util/helpers'
import Chatbot from './Chatbot';

class Index extends React.Component {

  state = {
    happy: 0,
    sad: 0,
    silly: 0,
    okay: 0
  }

  componentDidMount() {
    passCsrfToken(document, axios)
    this.setMoods()
  }

  handleClick = (mood) => {
    let currentMood = { currentMood: mood }
    this.createMood(currentMood)
    this.addState(mood)
  }

  addState(mood) {
    this.createMood(mood)
    this.setState((prevState) => ({
      [`${mood}`]: prevState[`${mood}`] + 1
    }))
  }

  setMoods() {
    axios
      .get('/api/moods')
      .then(response => {
        this.setState({
          happy: response.data.happy,
          sad: response.data.sad,
          okay: response.data.okay,
          silly: response.data.silly
        });
      })
  }

  createMood(currentMood) {
    axios
      .post('/api/moods', currentMood)
      .then(response => {
        console.log(response)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (

      <div className='mood-container'>
        <h1 className='welcome-sentence title is-1'>Hello.
        <br />
          How are you feeling today?</h1>
        <div className="mood-wrapper">
          <Mood moodType='happy' moodImage={happy} handleClick={this.handleClick} />
          <Mood moodType='okay' moodImage={okay} handleClick={this.handleClick} />
          <Mood moodType='silly' moodImage={silly} handleClick={this.handleClick} />
          <Mood moodType='sad' moodImage={sad} handleClick={this.handleClick} />
        </div>

        <PieChart
          data={[
            { title: 'Happy', value: this.state.happy, color: '#E38627' },
            { title: 'Okay', value: this.state.okay, color: '#C13C37' },
            { title: 'silly', value: this.state.silly, color: '#6A4335' },
            { title: 'sad', value: this.state.sad, color: '#6A2135' },
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
          <Chatbot />
        </div>
      </div>

    );
  }
}

export default Index
