import React from "react"
class RandomSillyAdvice extends React.Component {

  advice() {
    let advices = ["Wohoo! Do a silly dance.", "Do something crazy!", "Call someone that you're missing a lot!", "Go out for a nice walk!"]

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
