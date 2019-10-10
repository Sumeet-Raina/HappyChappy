import React from "react"

class RandomOkayAdvice extends React.Component {

  advice() {
    let advices = ["A-OK! Try listing 5 things in your life that you feel grateful for", "Alright! What's the one thing you are really looking forward to? Tell your closest friend about it.", "A-OK! Close your eyes, take 10 deep breaths with a smile on your face, then see how you feel."]

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
