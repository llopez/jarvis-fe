import React from 'react'
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List'
import { Link } from 'react-router-dom'
import { logout } from '../actions'
import store from '../store'
import ExitIcon from '@material-ui/icons/ExitToApp'

const Sidebar = (props) =>
  <Drawer open={props.open} onClose={props.onClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={props.onClose}>
      <div>
        <List component="nav">
          <Link to='/list'>
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
          </Link>
          <ListItem button onClick={() => {
            store.dispatch(logout())
          }}>
            <ListItemIcon>
              <ExitIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    </div>
  </Drawer>

export default Sidebar
