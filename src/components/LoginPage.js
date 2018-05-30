import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
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
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Login
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify='center' alignItems='center'>
          <Grid item>
            <form noValidate>
              <TextField
                label="Email"
                value={this.state.email}
                onChange={(e)=>{this.setState({...this.state, email: e.target.value})}}
                margin="normal"
                autoComplete='off'
              />
              <br/>
              <TextField
                label="Password"
                type='password'
                value={this.state.password}
                onChange={(e)=>{this.setState({...this.state, password: e.target.value})}}
                margin="normal"
              />
              <br/>
              <Button fullWidth variant="raised" color="primary" className={classes.button}>
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
     </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
