import React from "react"
import Mood from './Mood'
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
    moods: ""
  }

  componentDidMount() {
    passCsrfToken(document, axios)
  }

  handleClick = (mood) => {

    let current_mood = {current_mood: mood}
    
    axios
      .post('/api/moods', current_mood)
      .catch(error => {
        console.log(error)
      })
      .then(
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
      )
  }




  render() {
    return (

      <div className='mood-container'>
        <h1 className='welcome-sentence'>Hello.
        <br />
          How are you feeling today?</h1>
        <div className="mood-wrapper">
          <Mood moodType='happy' moodImage={happy} handleClick={this.handleClick} />
          <Mood moodType='okay' moodImage={okay} handleClick={this.handleClick} />
          <Mood moodType='silly' moodImage={silly} handleClick={this.handleClick} />
          <Mood moodType='sad' moodImage={sad} handleClick={this.handleClick} />
        </div>
        <p>Happy: {this.state.happy}</p>
        <p>Sad: {this.state.sad}</p>
        <p>Okay: {this.state.okay}</p>
        <p>Silly: {this.state.silly}</p>
      </div>

    );
  }
}

export default Index
