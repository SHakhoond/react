import React, { Component } from 'react'
import reactDom from 'react-dom'
import CountMe from './count'

class App extends Component {

  constructor (props) {
    super(props)
  }
  render () {
    return (
    		<div>
    			<h1>Welcome to {this.props.name}</h1>
          <CountMe />
 				</div>
 		)
  }

}

reactDom.render(<App />, document.querySelector('main'))
export default App
