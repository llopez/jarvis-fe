import React from 'react'
import { ListItem as ListItem2, ListItemText,
  ListItemSecondaryAction, Switch } from '@material-ui/core'
import LampIcon from '@material-ui/icons/WbIncandescent'
import { updateItem } from '../actions'
import store from '../store'

const ListItemSwitch = (props) =>
  <ListItem2 dense>
    <LampIcon />
    <ListItemText
      primary={props.name}
      secondary={props.state.value}
    />
    <ListItemSecondaryAction>
      <Switch checked={props.state.value === 'on'} onChange={(event, value) => {
        console.log(value)
        store.dispatch(updateItem({
          ...props,
          state: {value: value ? 'on':'off'}
        }))
      }}/>
    </ListItemSecondaryAction>
  </ListItem2>

export default ListItemSwitch
