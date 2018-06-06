import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  title: {
    flex: 1,
    paddingLeft: 10
  }
}

const Header = ({ classes, onMenuClick }) =>
  <AppBar position="sticky">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.title}>
        Jarvis
      </Typography>
    </Toolbar>
  </AppBar>

export default withStyles(styles)(Header)
