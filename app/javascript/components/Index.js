import React from "react"
import Mood from './Mood'
import sad from '../../assets/images/sad'
import happy from '../../assets/images/happy'
import okay from '../../assets/images/okay'
import silly from '../../assets/images/silly'
import axios from 'axios'

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
    axios
      .get('/api/moods')
      .then(response => {
        this.setState({ moods: response.data.moods });
      })

    this.setState((prevState) => ({
      [`${mood}`]: prevState[`${mood}`] + 1
    }))
    console.log(this.state)
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
        <p>{this.state.happy}</p>
        <p>{this.state.okay}</p>
        <p>{this.state.sad}</p>
        <p>{this.state.silly}</p>
      </div>

    );
  }
}

export default Index
