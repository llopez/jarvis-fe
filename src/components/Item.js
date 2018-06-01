import React from 'react'
import { Paper, Grid, Typography, List,
  ListItem, ListItemText,
  Switch, ListItemSecondaryAction, Button } from '@material-ui/core'
import Layout from './Layout'
import LampIcon from '@material-ui/icons/WbIncandescent'
import Slider from '@material-ui/lab/Slider'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  modeButton: {
    marginLeft: 5,
    minWidth: 50
  }
}

const Item = ({classes}) =>
  <Layout>
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={12}>
          <List>
            <ListItem dense>
              <LampIcon style={{fontSize: 50}}/>
              <ListItemSecondaryAction>
                <Typography variant='title'>Living Room Lamp</Typography>
                </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <List>
              <ListItem dense>
                <ListItemText
                  primary='STATE'
                />
                <ListItemSecondaryAction>
                  <Switch />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <List>
              <ListItem dense>
                <ListItemText
                  primary='TEMP'
                />
                <ListItemSecondaryAction style={{ width: '50%' }}>
                  <Slider
                    min={17}
                    max={30}
                    value={24}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <List>
              <ListItem dense>
                <ListItemText
                  primary='MODE'
                />
                <ListItemSecondaryAction>
                  <Button variant='raised' size='small' className={classes.modeButton}>COLD</Button>
                  <Button color='primary' variant='raised' size='small' className={classes.modeButton}>HEAT</Button>
                  <Button color='secondary' variant='raised' size='small' className={classes.modeButton}>DRY</Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </Layout>

export default withStyles(styles)(Item)
