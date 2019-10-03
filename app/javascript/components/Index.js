import React from "react"
import PropTypes from "prop-types"
import Mood from './Mood'
import ChuckNorrisFact from './ChuckNorrisFact'
import RandomJoke from './RandomJoke'
import RandomMeme from './RandomMeme'
import sad from '../../assets/images/sad'
import happy from '../../assets/images/happy'
import okay from '../../assets/images/okay'
import silly from '../../assets/images/silly'
class Index extends React.Component {

  state = {
    happy: 0,
    sad: 0,
    silly: 0,
    okay: 0
  }

  handleClick = (mood) => {
    this.setState((prevState) => ({
      [`${mood}`]: prevState[`${mood}`] + 1
    }))
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
        <p className='notification'>{this.state.sad}</p>
        <p className='notification'>{this.state.silly}</p>
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
