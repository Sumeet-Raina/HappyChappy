import React from "react"

class RandomHappyAdvice extends React.Component {

  advice() {
    let advices = ["That's great! Why not share your good vibes and send a warm text to somebody you like.", "Awesome! Write down the 3 best things that happened today", "Great! What's the best thing that happened today? Describe or imagine it to really feel it!", "Awesome! Now meditate on that! It can boost your mood even higher!"]

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
