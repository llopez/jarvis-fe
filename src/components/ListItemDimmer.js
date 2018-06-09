import React, { Component } from 'react'
import { ListItem as ListItem2, ListItemText,
  ListItemSecondaryAction } from '@material-ui/core'
import LampIcon from '@material-ui/icons/WbIncandescent'
import Slider from '@material-ui/lab/Slider'
import store from '../store'
import { updateItem } from '../actions'

class ListItemDimmer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  render() {
    return (
      <ListItem2 dense divider>
        <LampIcon />
        <ListItemText
          primary={this.state.name}
          secondary={this.state.state.value}
        />
        <ListItemSecondaryAction style={{ width: '40%' }}>
          <Slider
            min={0}
            max={100}
            step={1}
            value={this.state.state.value}
            onChange={(event, value) => {
              this.setState({
                ...this.state,
                state: {value: value}
              })
            }}
            onDragEnd={()=>{
              store.dispatch(updateItem(this.state))
            }}
          />
        </ListItemSecondaryAction>
      </ListItem2>
    )
  }
}

export default ListItemDimmer
