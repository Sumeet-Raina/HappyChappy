import React from "react"
import axios from 'axios'

class Fortune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fortuneCookie: "Open your mind and your heart to good things."
    };

    this.getFortune = this.getFortune.bind(this)
  }

  getFortune() {
    var fortunes = ['Be at peace with yourself.', 'A friend in need is a friend indeed.', 'Somebody appreciates the unique you.', 'Learn how to do something new today.', 'Worry does not beget change.', 'To be idle is to be foolish.', 'Avoid negative people to stay positive.', 'You can learn much from people who are different from you.', 'Fall for someone whos not your type.'];
    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    console.log(fortune)
      this.setState({ fortuneCookie: fortune });
  }

  render() {
    return (
      <div className="fortune-container">
        <h1 className='fortune-title label'>Fortune Cookie</h1>
        <h3 className='fortune-title subtitle'>{'"' + this.state.fortuneCookie + '"'}</h3>
        <button onClick={this.getFortune}
          type="button"
          className="fortune-button button is-info">
          refresh fortune cookie
      </button>
      </div >
    );
  }
}

export default Fortune