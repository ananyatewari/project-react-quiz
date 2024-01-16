import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <>
        <h3>Result</h3>
      <div id='question'>
      <div><h2>You need more practice !</h2></div>
      <div className='ques' style={{color: "blue"}}>Your score is 20%</div>
      <div className="list">
        <div id='one'>
          <div>Total number of questions</div>
          <div>Number of attempted questions</div>
          <div>Number of correct answers</div>
          <div>Number of wrong answers</div>
        </div>
        <div id='two'>
          <div>15</div>
          <div>9</div>
          <div>3</div>
          <div>6</div>
        </div>
      </div>
    </div>
      <div className="buttons" style={{marginTop: "-20vh", marginBottom: "10vh"}}>
        <div>Play Again</div> 
        <div>Back to home</div>
      </div>
    </>
    )
  }
}
