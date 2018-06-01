import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountIcon from '@material-ui/icons/AccountCircle'

const styles = {
  accountIcon: {
    color: '#3f51b5',
    fontSize: 90
  },
  grid: {
    textAlign: 'center'
  },
  button: {
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
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} md={4} className={classes.grid}>
          <AccountIcon className={classes.accountIcon}/>
          <Typography variant="title" color="inherit">
            Login
          </Typography>
          <form noValidate>
            <TextField
              label="Email"
              value={this.state.email}
              onChange={(e)=>{this.setState({...this.state, email: e.target.value})}}
              margin="normal"
              autoComplete='off'
              fullWidth
            />
            <br/>
            <TextField
              label="Password"
              type='password'
              value={this.state.password}
              onChange={(e)=>{this.setState({...this.state, password: e.target.value})}}
              margin="normal"
              fullWidth
            />
            <Button variant="raised" color="primary" className={classes.button}>
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginPage);
