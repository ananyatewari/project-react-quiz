import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div id='question'>
        <div><h2>Question</h2></div>
        <div className='no'>1 of 15</div>
        <div className='ques'>Which is the only mammal that can jump ?</div>
        <div className="options">
          <div>dog</div>
          <div>elephant</div>
          <div>goat</div>
          <div>lion</div>
        </div>
        <div className="buttons">
          <div>Previous</div>
          <div>Next</div>
          <div>Quit</div>
        </div>
      </div>
    )
  }
}
