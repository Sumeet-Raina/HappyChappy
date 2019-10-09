import React from "react"
import axios from 'axios'
class ChuckNorrisFact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fact: 'Chuck Norris can text using his walkie talkie and without batteries.'
    };

    this.getFact = this.getFact.bind(this)
  }

  getFact() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
        this.setState({ fact: response.data.value });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="chuck-norris-container">
        <h1 className='chuck-norris-title label'>Chuck Norris Facts</h1>
        <h3 className='chuck-norris-fact'>{'"' + this.state.fact + '"'}</h3>
        <button onClick={this.getFact}
          type="button"
          className="chuck-norris-button button is-info">
          refresh fact
        </button>
      </div>
    );
  }
}

export default ChuckNorrisFact
