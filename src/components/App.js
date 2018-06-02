import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import List from './List'
import Item from './Item'
import LoginPage from './LoginPage'

const App = (props) =>
  <Router>
    <Switch>
      <Route exact path='/' component={LoginPage}/>
      <Route exact path='/list' component={List}/>
      <Route exact path='/item/:id' component={Item}/>
      <Route exact path='/login' component={LoginPage}/>
    </Switch>
  </Router>

export default App
