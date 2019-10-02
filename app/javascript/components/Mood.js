import React from "react"
import PropTypes from "prop-types"
class Mood extends React.Component {

  state = {
    happy: 0,
    sad: 0,
    silly: 0,
    okay: 0
  }

  // handleClick = (mood) => {


  //   this.setState((prevState) =>() {
  //     [`${mood}`]: this.state[`${mood}`] += 1
  //   })
  //   console.log(this.state)
  // }

  handleClick(mood) {
    this.setState((state) => {
      return {
        [`${mood}`]: this.state[`${mood}`] += 1

      }
    })

    console.log(this.state)

  }

  render() {
    return (
      <div onClick={() => this.handleClick(this.props.moodType)} className="mood-container">
        <div className="mood-item">
          <h2 className="mood-type">{this.props.moodType}</h2>
          <img src={this.props.moodImage} alt="happy face" className='happy-img mood-img' />
        </div>
        <p>{this.state.happy}</p>
        <p>{this.state.sad}</p>
        <p>{this.state.okay}</p>
        <p>{this.state.silly}</p>
      </div>

    );
  }
}


export default Mood
