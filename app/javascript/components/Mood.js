import React from "react"
import PropTypes from "prop-types"
class Mood extends React.Component {


  render() {
    return (
      <div onClick={
        () => this.props.handleClick(this.props.moodType)} className="mood-container">
        <div className="mood-item">
          <h2 className="mood-type label">{this.props.moodType}</h2>
          <figure className="image is-128x128">
            <img src={this.props.moodImage} alt={this.props.moodType} />
          </figure>
        </div>
      </div>

    );
  }
}


export default Mood
