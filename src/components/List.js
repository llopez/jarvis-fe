import React from 'react'
import Layout from './Layout'
import { Grid, List, ListItem, ListItemText,
  ListItemSecondaryAction, IconButton } from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'
import LampIcon from '@material-ui/icons/WbIncandescent'
import { Link } from 'react-router-dom'

const ListView = (props) =>
  <Layout>
    <Grid item xs={12} sm={12} md={12}>
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
          <ListItem key={value} dense>
            <LampIcon />
            <ListItemText
              primary={`Lamp #${value + 1}`}
              secondary='ON'
            />
            <ListItemSecondaryAction>
              <Link to={`/item/${value}`}>
                <IconButton>
                  <ArrowIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Grid>
  </Layout>

export default ListView
