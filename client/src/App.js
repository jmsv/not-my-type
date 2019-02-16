import React, { Component } from 'react'
import './App.css'

import TypeyBox from './components/typey-box/TypeyBox'

class App extends Component {
  state = {
    typeyData: {}
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  render() {
    return (
      <div>
        <div className='App'>
          <h1>Not My Type</h1>
          <p>please mash at the keyboard in the box below</p>
          <TypeyBox />
        </div>
      </div>
    )
  }
}

export default App
