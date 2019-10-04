import React from "react"
import PropTypes from "prop-types"
class Mood extends React.Component {

  setOpacity(){
    if (this.props.currentMood == "" || this.props.currentMood == this.props.moodType ) {
        return { opacity: 1 }
    } else {
        return { opacity: 0.2 }
      }
    // if (this.props.currentMood != this.props.moodType) {
    //   return { opacity: 0.2 }
    // } else {
    //   return { opacity: 1 }
    // }
  }

  render() {
    return (
      <div onClick={
        () => this.props.handleClick(this.props.moodType)} className="mood-container">
        <div className="mood-item">
          <h2 className="mood-type label">{this.props.moodType}</h2>
          <figure className="image is-128x128">
            <img src={this.props.moodImage} alt={this.props.moodType} style={ this.setOpacity() }/>
          </figure>
        </div>
      </div>

    );
  }
}


export default Mood
