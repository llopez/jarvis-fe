import React, { Component } from 'react';
import { TextField, Grid, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AccountIcon from '@material-ui/icons/AccountCircle'

const styles = {
  accountIcon: {
    color: '#3f51b5',
    fontSize: 140
  },
  root: {
    marginTop: 20
  },
  header: {
    textAlign: 'center'
  },
  content: {
    minWidth: 200
  },
  footer: {
    marginTop: 30
  },
  textField: {
    marginTop: 20
  }
}

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify='center' alignItems='center' direction='column' className={classes.root}>
        <Grid item xs={12} className={classes.header}>
          <AccountIcon className={classes.accountIcon}/>
          <Typography variant='title'>Login</Typography>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <form noValidate>
            <TextField
              label="Email"
              value={this.state.email}
              onChange={(e)=>{this.setState({...this.state, email: e.target.value})}}
              margin="normal"
              autoComplete='off'
              fullWidth
              className={classes.textField}
            />
            <TextField
              label="Password"
              type='password'
              value={this.state.password}
              onChange={(e)=>{this.setState({...this.state, password: e.target.value})}}
              margin="normal"
              fullWidth
              className={classes.textField}
            />
          </form>
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <Button variant="raised" color="primary">Login</Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginPage);
