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
      <div className='piechart-mood-container'>
        <div className='piechart-container'>
          < PieChart
            data={
              [
                { title: 'Okay', value: this.state.okay, color: '#33FF7D' },
                { title: 'Happy', value: this.state.happy, color: '#FFF333' },
                { title: 'Silly', value: this.state.silly, color: '#E933FF' },
                { title: 'Sad', value: this.state.sad, color: '#3333FF' }
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
          />
        </div>
        <div className='legend-container'>
          <p className='okay-color'> okay</p>
          <p className='happy-color'>  happy</p>
          <p className='silly-color'>   silly</p>
          <p className='sad-color'>  sad</p>
        </div>
      </div>
    )
  }
}

export default MoodPieChart