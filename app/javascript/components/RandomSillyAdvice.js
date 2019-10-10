import React from "react"
class RandomSillyAdvice extends React.Component {

  advice() {
    let advices = ["Woohoo! Let's do a silly dance!", "Alright! Let's do something crazy!", "Great! It's a nice time to message someone that you haven't had time for lately", "Ha ha! Me too! Let's get out for a nice walk and smile at strangers!"]

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

export default RandomSillyAdvice
