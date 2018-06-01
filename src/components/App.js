import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import List from './List'
import Item from './Item'
import LoginPage from './LoginPage'

const App = (props) =>
  <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/list' component={List}/>
      <Route exact path='/item/:id' component={Item}/>
      <Route exact path='/login' component={LoginPage}/>
    </Switch>
  </Router>

export default App
