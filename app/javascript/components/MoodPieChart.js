import React from "react"
import axios from 'axios'
import PieChart from 'react-minimal-pie-chart';
import { passCsrfToken } from '../util/helpers'


class MoodPieChart extends React.Component {

  state = {
    happy: 0,
    sad: 0,
    silly: 0,
    okay: 0,
    currentMood: ""
  }

  componentDidMount() {
    passCsrfToken(document, axios)
    this.setMoods(this)
  }

  handleClick = (mood) => {
    let currentMood = { currentMood: mood }
    this.createMood(currentMood, this.setMoods)
    this.setState({
      currentMood: mood
    })
  }

  createMood(currentMood, callback) {
    axios
      .post('/api/moods', currentMood)
      .then(response => {
        console.log(response)
        console.log(response.data)
        callback(this)
      })
      .catch(error => {
        console.log(error)
      })
  }

  setMoods(self) {
    axios
      .get('/api/moods')
      .then(response => {
        self.setState({
          happy: response.data.happy,
          sad: response.data.sad,
          okay: response.data.okay,
          silly: response.data.silly,
          currentMood: response.data.currentMood
        });
      })
  }

  render() {
    console.log(this.state)
    return (
      < PieChart
        data={
          [
            { title: 'Okay', value: this.state.okay, color: '#C13C37' },
            { title: 'Happy', value: this.state.happy, color: '#E38627' },
            { title: 'Silly', value: this.state.silly, color: '#6A4335' },
            { title: 'Sad', value: this.state.sad, color: '#6A2135' }
          ]}
        style={{ height: '15vw' }
        }
        label
        animate
        labelStyle={{
          fontSize: '10px',
          fontColor: '#FFFFFF',
          fontFamily: 'sans-serif',
          fill: '#121212'
        }}
      />)
  }
}

export default MoodPieChart