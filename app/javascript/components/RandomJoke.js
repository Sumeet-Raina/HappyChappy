import React from "react"
import axios from 'axios'
class RandomJoke extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      setup: 'What do you call a bear with no teeth?',
      punchline: 'A gummy bear!'
    };

    this.getJoke = this.getJoke.bind(this)
  }

  getJoke() {
    axios.get('https://sv443.net/jokeapi/category/Miscellaneous?blacklistFlags=religious,political,nsfw')
      .then(response => {
        console.log(response)
        this.setState({
          setup: response.data.setup,
          delivery: response.data.delivery,
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="random-joke-container">
        <h1 className='random-joke-title label'>Random Joke</h1>
        <h3 className='random-joke-setup subtitle'>{'"' + this.state.setup + '"'}</h3>
        <h3 className='random-joke-delivery subtitle'>{'"' + this.state.delivery + '"'}</h3>
        <button onClick={this.getJoke}
          type="button"
          className="random-joke-button button is-info">
          More Jokes Please!
      </button>
      </div >
    );
  }
}

export default RandomJoke
