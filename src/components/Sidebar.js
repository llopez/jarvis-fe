import React from 'react'
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import { Link } from 'react-router-dom'

const Sidebar = (props) =>
  <Drawer open={props.open} onClose={props.onClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={props.onClose}>
      <div>
        <List component="nav">
          <Link to='/'>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to='/list'>
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  </Drawer>

export default Sidebar
