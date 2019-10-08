import React from "react"
import axios from 'axios'
class RandomMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'FBI OPEN UP"',
      url: 'https://i.redd.it/zmwnl5jvj8q31.jpg'
    };

    this.getMeme = this.getMeme.bind(this)
  }

  componentDidMount(){
    this.getMeme()
  }

  getMeme() {
    axios.get('https://meme-api.herokuapp.com/gimme')
      .then(response => {
        this.setState({
          title: response.data.title,
          url: response.data.url,
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="random-meme-container">
        <h1 className='random-meme-title label'>Random Meme</h1>
        <h3 className='random-meme-title subtitle'>{'"' + this.state.title + '"'}</h3>
        <img src={this.state.url} className='random-meme-img' alt="" />
        <button onClick={this.getMeme}
          type="button"
          className="random-meme-button button is-info">
          One More Meme Please!
      </button>
      </div >
    );
  }
}

export default RandomMeme
