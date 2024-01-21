import React, { Component } from 'react'
import Data from "../resources/Questions.json"

export default class QuizComponent extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  clickPrev = () => {
    let newish = this.state.count == 0 ? Data.length - 1 : this.state.count - 1
    this.setState({
      count : newish
    })
  }

  clickNext = () => {
    let newish = this.state.count == Data.length - 1 ? 0 : this.state.count + 1
    this.setState({
      count : newish
    })
  }

  clickQuit = () => {
    window.confirm("Are you sure that you want to quit ?")
  }

  render() {
    return (
      <div id='question'>
        <div><h2>Question</h2></div>
        <div className='no'>
          <span>{this.state.count + 1} </span>
          of <span>{Data.length}</span>
        </div>
        <div className='ques'>{Data[this.state.count].question}</div>
        <div className="options">
          <div>{Data[this.state.count].optionA}</div>
          <div>{Data[this.state.count].optionB}</div>
          <div>{Data[this.state.count].optionC}</div>
          <div>{Data[this.state.count].optionD}</div>
        </div>
        <div className="buttons">
          <div onClick={this.clickPrev}>Previous</div>
          <div onClick={this.clickNext}>Next</div>
          <div onClick={this.clickQuit}>Quit</div>
        </div>
      </div>
    )
  }
}
