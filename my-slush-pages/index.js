import React from 'react'

import reactDom from 'react-dom'
import App from './components/app'
import CountMe from './components/count'

reactDom.render(<App name='react'/>, document.querySelector('main'))
console.log('welcome to react')
