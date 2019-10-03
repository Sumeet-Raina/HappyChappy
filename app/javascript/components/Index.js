import React from "react"
import PropTypes from "prop-types"
import Mood from './Mood'
import ChuckNorrisFact from './ChuckNorrisFact'
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
        <ChuckNorrisFact/>
      </div>

    );
  }
}

export default Index
