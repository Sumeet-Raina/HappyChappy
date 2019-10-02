import React from "react"
import PropTypes from "prop-types"
class Mood extends React.Component {


  render() {
    return (
      <div onClick={
        () => this.props.handleClick(this.props.moodType)} className="mood-container">
        <div className="mood-item">
          <h2 className="mood-type">{this.props.moodType}</h2>
          <img src={this.props.moodImage} alt="happy face" className='happy-img mood-img' />
        </div>
      </div>

    );
  }
}


export default Mood
