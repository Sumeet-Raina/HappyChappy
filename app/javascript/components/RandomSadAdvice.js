import React from "react"
import { sadAdvices } from '../constants';
class RandomSadAdvice extends React.Component {

  advice() {
    let advices = ["It’s okay to feel sad.", "Remember that it's temporary.",
      "It’s normal to feel sad.", "What's the one way you can take care of yourself right now?", "It’s okay to feel sad. Be brave, reach out to someone, or write your thoughts down.", "You’re not alone in this.", "We are not on this earth to see through one another, but to see one another through.", "I can’t really understand what you are feeling, but I can offer my compassion.", "I’m sorry that you’re in so much pain. I am not going to leave you. I am going to take care of myself, so you don’t need to worry that your pain might hurt me.", "Have you tried chamomile tea?"]

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

export default RandomSadAdvice
