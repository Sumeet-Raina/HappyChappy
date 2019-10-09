import React from "react"
import { sadAdvices } from '../constants';
class RandomSadAdvice extends React.Component {

  advice() {
    let advices = ["It’s okay to feel sad.", "Remember that it's temporary.",
      "It’s normal to feel sad.", "What's the one way you can take care of yourself right now?", "It’s okay to feel sad. Be brave, reach out to someone, or write your thoughts down."
    ]

    let index = Math.floor(Math.random() * advices.length)
    console.log(advices)
    console.log(index)
    console.log(advices[index])
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

export default RandomSadAdvice
