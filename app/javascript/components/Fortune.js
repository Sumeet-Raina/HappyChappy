import React from "react"
import axios from 'axios'

class Fortune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fortune: "A friend in need is a friend indeed."
    };

    this.getFortune = this.getFortune.bind(this)
  }

  getFortune() {
    axios.get(`http://fortunecookieapi.herokuapp.com/v1/fortunes/5403c81dc2fea4020029ab${Math.floor(Math.random() * (35 - 45 + 1)) + 35 }` )
      .then(response => {
        this.setState({ fortune: response.data.message });
        console.log(response)
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="fortune-container">
        <h1 className='fortune-title label'>Fortune</h1>
        <h3 className='fortune-title subtitle'>{'"' + this.state.fortune + '"'}</h3>
        <button onClick={this.getFortune}
          type="button"
          className="fortune-button button is-info">
          Refresh Fortune Cookie Please!
      </button>
      </div >
    );
  }
}

export default Fortune