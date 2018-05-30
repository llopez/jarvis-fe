import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

const styles = {
  title: {
    flex: 1,
    paddingLeft: 10
  },
  loginButton: {
    color: 'white'
  }
}

const Header = ({ classes, onMenuClick }) =>
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.title}>
        Jarvis
      </Typography>
      <Link to='/login'>
        <Button className={classes.loginButton}>
          Login
        </Button>
      </Link>
    </Toolbar>
  </AppBar>

export default withStyles(styles)(Header)
