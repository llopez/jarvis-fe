import React, { Component } from 'react'
import Layout from './Layout'
import { Grid, List } from '@material-ui/core'
import store from '../store'
import { fetchItems } from '../actions'
import ListItem from './ListItem'
import ListItemSwitch from './ListItemSwitch';

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
      if(item.pin.type === 'switch')
        return <ListItemSwitch key={item.id} {...item} />
      else
        return <ListItem key={item.id} {...item} />
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
