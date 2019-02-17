import React, { Component } from 'react'
import { TextField, LinearProgress, Fab, Paper, Typography } from '@material-ui/core'

import { Save } from '@material-ui/icons'

import downloadFile from 'js-file-download'

import axios from 'axios'

import './TypeyBox.css'

const mashTargetLength = 100

export default class TaskList extends Component {
  state = {
    events: [],
    done: false,
    startTime: null,
    mashVal: '',
    eventsCollection: [],
    humanLog: []
  }

  getEventTime = () => {
    if (!this.state.startTime) {
      this.setState({ startTime: new Date() })
      return 0
    }

    return (new Date()) - this.state.startTime
  }

  recordEvent = event => {
    const time = this.getEventTime()

    const userEvent = {
      key: event.key.toLowerCase(),
      type: event.type,
      time
    }

    if (userEvent.key.length > 1) return

    this.setState({ events: [...this.state.events, userEvent] }, () => {
      if (this.state.events.length >= mashTargetLength) {
        this.finishedMash()
      }
    })
  }

  finishedMash = () => {
    this.setState({
      done: true,
      mashVal: ''
    })

    axios.post('/api/detect', this.state.events)
      .then(res => {
        this.setState({ humanLog: [res.data.human, ...this.state.humanLog] })
      })

    this.setState({ eventsCollection: [...this.state.eventsCollection, { events: this.state.events }] }, () => {
      this.setState({ events: [] })
    })

    setTimeout(() => {
      this.setState({ done: false }, () => {
        this.mashInput.focus()
      })
    }, 1000)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  mashProgress = () => (this.state.events.length * 110) / mashTargetLength

  downloadTrainingData = () => {
    const json = JSON.stringify(this.state.eventsCollection, null, 2)
    downloadFile(json, 'mash-training-data.json')
  }

  render () {
    return (
      <div>
        <TextField
          name="mashVal"
          inputRef={input => this.mashInput = input}
          autoFocus
          fullWidth
          value={this.state.mashVal}
          onChange={this.handleChange}
          style={{ backgroundColor: this.state.done ? '#98ed71' : 'white' }}
          label=''
          placeholder=''
          helperText=''
          disabled={this.state.done}
          margin='normal'
          variant='outlined'
          onKeyDown={this.recordEvent}
          onKeyUp={this.recordEvent}
        />

        <LinearProgress color="primary" variant="determinate" value={this.mashProgress()} />

        {this.state.humanLog.map(log => {
          return <Paper style={{
            padding: 8,
            marginTop: 16,
            marginBottom: 16,
            backgroundColor: log ? '#aced8e' : '#ea8c8c'
          }}>
          <Typography variant='body1'>you are{log ? ' human!' : ' a bot :('}</Typography>
        </Paper>
        })}

        <hr style={{margin: '32px 0'}} />
        <div style={{textAlign: 'center', margin: 16}}>
          mashes recorded: {this.state.eventsCollection.length}
        </div>

        <div style={{ textAlign: 'center' }}>
          {this.state.eventsCollection.length ? (
            <Fab
              variant="extended"
              color="primary"
              onClick={this.downloadTrainingData}
              style={{margin: 16}} >

              <Save />&nbsp;Save Training Data
            </Fab>
          ) : ''}
        </div>
      </div>
    )
  }
}
