import React from 'react'

class Index extends React.Component {
  render () {
    return (

      <div className='mood-container'>
        <h1 className='welcome-sentence'>Hello.
          <br />
          How are you feeling today?</h1>
        <h4 className="mood">good</h4>
        <h4 className="mood">bad</h4>
        <h4 className="mood">okay</h4>
        <h4 className="mood">silly</h4>
      </div>

    )
  }
}

export default Index
