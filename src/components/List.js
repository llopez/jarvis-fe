import React from 'react'
import Layout from './Layout'
import { Paper, Grid, Typography,
  List, ListItem, ListItemText,
  ListItemSecondaryAction, IconButton } from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'
import LampIcon from '@material-ui/icons/WbIncandescent'

const ListView = (props) =>
  <Layout>
    <Grid item xs={12} sm={12} md={12}>
      <Paper>
        <List>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
            <ListItem dense>
              <LampIcon />
              <ListItemText
                primary={`Lamp #${value + 1}`}
                secondary='ON'
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <ArrowIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  </Layout>

export default ListView
