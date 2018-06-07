import React, { Component } from 'react'
import { Paper, Grid, Typography, List,
  ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import Layout from './Layout'
import LampIcon from '@material-ui/icons/WbIncandescent'
import Slider from '@material-ui/lab/Slider'
import { withStyles } from '@material-ui/core/styles'
import store from '../store'
import { updateItem } from '../actions'

const styles = {
  modeButton: {
    marginLeft: 5,
    minWidth: 50
  }
}

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Default Name'
    }
    this._updateState = this._updateState.bind(this)
    this._updateItem = this._updateItem.bind(this)
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        ...this.state,
        ...store.getState().items.find((x) => x.id === this.props.match.params.id)
      })
    })
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      ...store.getState().items.find((x) => x.id === this.props.match.params.id)
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  _updateState(event, value) {
    this.setState({
      ...this.state,
      state: {value: value}
    })
  }

  _updateItem() {
    store.dispatch(updateItem(this.state))
  }

  render() {
    const classes = this.props.classes
    return (
      <Layout>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={12}>
              <List>
                <ListItem dense>
                  <LampIcon style={{fontSize: 50}}/>
                  <ListItemSecondaryAction>
                    <Typography variant='title'>{this.state.name}</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              { 
                this.state.pin && this.state.pin.type === 'dimmer' &&
                <Paper>
                  <List>
                    <ListItem dense>
                      <ListItemText
                        primary='STATE'
                      />
                      <ListItemSecondaryAction style={{ width: '50%' }}>
                        <Slider
                          min={0}
                          max={100}
                          step={1}
                          value={this.state.state.value}
                          onChange={this._updateState}
                          onMouseUp={this._updateItem}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Paper>
              }
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default withStyles(styles)(Item)
