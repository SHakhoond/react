import React, { Component } from 'react'

class CountMe extends Component {

  constructor (props) {
    super(props)
    this.state = {count:0}
  }

  	addByOne() {
		console.log(this.state.count)
 		this.setState({count: this.state.count + 1})
 	}

 	decrease() {
 		this.setState({count: this.state.count -1})
 	}


 	render() {
 		return (

 				<div>
          <h3>this is my count: {this.state.count}</h3>
          <button onClick={this.addByOne.bind(this)}> add by 1</button>
 					<button onClick={this.decrease.bind(this)}> -1</button>
 				</div>
 			)

	}
}
export default CountMe
