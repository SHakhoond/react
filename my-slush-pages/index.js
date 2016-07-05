import React from 'react'
import reactDom from 'react-dom'
import App from './components/app'


reactDom.render(<App name='my react'/>, document.querySelector('main'))
console.log('welcome to react')
