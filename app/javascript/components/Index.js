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
    okay: 0,
    currentMood: ""
  }

  componentDidMount() {
    passCsrfToken(document, axios)
    this.setMoods(this)
  }

  handleClick = (mood) => {
    let currentMood = {currentMood: mood}
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
          silly: response.data.silly
          });
        })
  }

  render() {
    return (

      <div className='mood-container'>
        <h1 className='welcome-sentence title is-1'>Hello.
        <br />
          How are you feeling today?</h1>
        <div className="mood-wrapper">
          <Mood moodType='happy' moodImage={happy} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
          <Mood moodType='okay' moodImage={okay} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
          <Mood moodType='silly' moodImage={silly} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
          <Mood moodType='sad' moodImage={sad} handleClick={this.handleClick} currentMood={this.state.currentMood}/>
        </div>
        <p className='notification'>{this.state.happy}</p>
        <p className='notification'>{this.state.okay}</p>
        <p className='notification'>{this.state.silly}</p>
        <p className='notification'>{this.state.sad}</p>
        <p className='notification'>{this.state.currentMood}</p>
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
