import React from "react"
import PropTypes from "prop-types"
class Mood extends React.Component {


  render() {
    return (
      <div className="mood-container">
        <h2 className="mood-type">{this.props.moodType}</h2>
        <img src={this.props.moodImage} alt="happy face" className='happy-img mood-img' />
      </div>
    );
  }
}

export default Mood
