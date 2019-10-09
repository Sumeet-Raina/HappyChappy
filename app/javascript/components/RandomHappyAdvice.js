import React from "react"

class RandomHappyAdvice extends React.Component {

  advice() {
    let advices = ["That's great!Share your good vibes, send a text to someone you like.", "Try to name and write down in your diary 5 best things that happened today", "What is the best thing that happend today? Can you describe it or image in your head?", "Try meditation! It will boot your mood even higher!"]

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

export default RandomHappyAdvice
