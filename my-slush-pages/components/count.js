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
 	
 	// twoTimes() {
 	// 	this.setState({count: this.state.count + 5})
 	// }


 	render() {
 		return (

 				<div>
 					<h3>this is my count: {this.state.count}</h3>
 					<button onClick={this.counting.bind(this)}> add by 1</button>
 				</div>
 			)

	}
}


export default CountMe