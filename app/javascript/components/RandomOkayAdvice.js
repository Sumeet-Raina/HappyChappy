import React from "react"
import { sadAdvices } from '../constants';
class RandomOkayAdvice extends React.Component {

  advice() {
    let advices = ["On pice of paper list five things in your life that you feel grateful about", "What's the one thing you are really looking forward to? Tell your closes friend about it.", "Close your eyes and take 10 deep breaths with a smile on your face and see how you feel."]

    let index = Math.floor(Math.random() * advices.length)
    return advices[index]
  }
  render() {
    console.log(this.advice())



    return (
      <>
        <h3 className='title'>{this.advice()}</h3>
      </>
    );
  }
}

export default RandomOkayAdvice
