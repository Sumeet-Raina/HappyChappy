import React from "react"
import PropTypes from "prop-types"
class Index extends React.Component {
  render() {
    return (

      <div class='mood-container'>
        <h1 class='welcome-sentence'>Hello. How are you feeling today?</h1>
        <div class='mood-emoji'><img class='mood-emoji' src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_960_720.png" alt="" srcset="" /></div>
        <span class='mood-emoji'>😊</span>
        <span class='mood-emoji'>😐</span>
        <span class='mood-emoji'>😔</span>
      </div>

    );
  }
}

export default Index
