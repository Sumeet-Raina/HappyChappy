import React from "react"
import PropTypes from "prop-types"
import Mood from './Mood'
import sad from '../../assets/images/sad'
import happy from '../../assets/images/happy'
import okay from '../../assets/images/okay'
import silly from '../../assets/images/silly'
class Index extends React.Component {
 
  render() {
    return (

      <div className='mood-container'>
        <h1 className='welcome-sentence'>Hello.
        <br />
          How are you feeling today?</h1>
        <div className="mood-wrapper">
          <Mood moodType='happy' moodImage={happy} />
          <Mood moodType='okay' moodImage={okay} />
          <Mood moodType='silly' moodImage={silly} />
          <Mood moodType='sad' moodImage={sad} />
        </div>
      </div>

    );
  }
}

export default Index
