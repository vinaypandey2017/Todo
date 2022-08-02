import React, { Component } from 'react'

export default class MyComp extends Component {
    state={
        count:0,
    }
  render() {
    return (
      <>
        <button onClick={()=>{
          this.setState({count:this.state.count+1})
        }}>
            Increment
        </button>
        <h1>
          {this.state.count}
        </h1>
        <button onClick={()=>{
          this.setState({count:this.state.count-1})
        }}>
            Decrement</button>
            <h1>
            </h1>
           
      </>

    )
  }
}
