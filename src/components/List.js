import React, { Component } from 'react'
import Layout from './Layout'
import { Grid, List } from '@material-ui/core'
import store from '../store'
import { fetchItems } from '../actions'
import ListItem from './ListItem'
import ListItemSwitch from './ListItemSwitch';
import ListItemDimmer from './ListItemDimmer';

class ListView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        ...this.state,
        items: store.getState().items
      })
    })
  }

  componentDidMount() {
    store.dispatch(fetchItems())
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const items = this.state.items.map(item => {
      switch (item.pin.type) {
        case 'switch':
          return <ListItemSwitch key={item.id} {...item} />
        case 'aircon':
          return <ListItemSwitch key={item.id} {...item} />
        case 'dimmer':
          return <ListItemDimmer key={item.id} {...item} />
        default:
          return <ListItem key={item.id} {...item} />
      }
    })

    return (
      <Layout>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <List>
            {items}
          </List>
        </Grid>
      </Layout>
    )
  }
}

export default ListView
