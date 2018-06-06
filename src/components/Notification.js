import React, {Component} from 'react'
import store from '../store'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

export default class Notification extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      msg: 'Default Message'
    }
    this._handleClose = this._handleClose.bind(this)
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().notification)
    });
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  _handleClose() {
    store.dispatch({
      type: 'NOTIFY',
      payload: {
        open: false
      }
    })
  }

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message={this.state.msg}
        autoHideDuration={5000}
        onClose={this._handleClose}
        action={<IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this._handleClose}
        >
          <CloseIcon />
        </IconButton>}
      />
    );
  }
}
