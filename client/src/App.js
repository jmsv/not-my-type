import React, { Component } from 'react'
import './App.css'

import Typography from '@material-ui/core/Typography'

import TypeyBox from './components/typey-box/TypeyBox'

class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <div className='App'>
          <Typography variant="overline">Not My Type -- captcha</Typography>
          <Typography variant="h2">u human?</Typography>
          <p>pls click into the text box below and mash at the keyboard</p>
          <TypeyBox />
        </div>
      </div>
    )
  }
}

export default App
