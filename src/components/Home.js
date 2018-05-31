import React from 'react'
import Layout from './Layout'
import { Paper, Grid, Typography } from '@material-ui/core'
const Home = (props) =>
  <Layout>
    <Grid item>
      <Paper>
        <Typography variant='display2'>
          Home
        </Typography>
      </Paper>
    </Grid>
  </Layout>

export default Home
