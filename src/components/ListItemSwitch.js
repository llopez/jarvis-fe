import React from 'react'
import { ListItem as ListItem2, ListItemText,
  ListItemSecondaryAction, Switch } from '@material-ui/core'
import LampIcon from '@material-ui/icons/WbIncandescent'

const ListItemSwitch = ({id, name, state}) =>
  <ListItem2 dense>
    <LampIcon />
    <ListItemText
      primary={name}
      secondary={state.value}
    />
    <ListItemSecondaryAction>
      <Switch />
    </ListItemSecondaryAction>
  </ListItem2>
  
export default ListItemSwitch
