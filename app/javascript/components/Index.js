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
import { passCsrfToken } from '../util/helpers'

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
    let currentMood = {currentMood: mood}   
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
        <p className='notification'>{this.state.happy}</p>
        <p className='notification'>{this.state.okay}</p>
        <p className='notification'>{this.state.silly}</p>
        <p className='notification'>{this.state.sad}</p>
        <div className="entertainment-container">
          <ChuckNorrisFact />
          <RandomJoke />
          <RandomMeme />
        </div>
      </div>

    );
  }
}

export default Index
