import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

export default class TaskList extends Component {
  render () {
    return (
      <div>
        <TextField
          label=''
          placeholder='mash me'
          helperText=''
          fullWidth
          margin='normal'
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    )
  }
}
