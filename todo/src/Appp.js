import React, { Component } from 'react'

export default class  extends Component {
    state={
        tasks: ["Ek Kaam","Do Kaam","Teen Kaaam"],
        currVal:""
        
        
    }
  render() {
    return (
      <div>
        <div id='KyaKaam '>
        <input onChange={(elm)=>{
            this.setState({currVal:elm.target.value})
        }}/>
        <button onClick={()=>{
            this.setState({ 
                tasks:[...this.state.tasks,...this.state.currVal],
                currVal:""
            
            })
        }} value={this.state.currInput}> Submit</button>

        </div>
        <div id='container'>

        </div>
      </div>
    )
  }
}
