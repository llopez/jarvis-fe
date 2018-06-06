import React from 'react'
import { ListItem as ListItem2, ListItemText,
  ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LampIcon from '@material-ui/icons/WbIncandescent'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'

const ListItem = ({id, name, state}) =>
  <ListItem2 dense>
    <LampIcon />
    <ListItemText
      primary={name}
      secondary={state.value}
    />
    <ListItemSecondaryAction>
      <Link to={`/item/${id}`}>
        <IconButton>
          <ArrowIcon />
        </IconButton>
      </Link>
    </ListItemSecondaryAction>
  </ListItem2>
  
export default ListItem

