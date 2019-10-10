import React from "react"
class RandomSillyAdvice extends React.Component {

  advice() {
    let advices = ["Woohoo! Let's do a silly dance!", "Alright! Let's do something crazy!", "Great! THis si a great time to message someone that haven't had time to message lately", "Ha ha! Me too! Let's get out for a nice walk and smile at strangers!"]

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
