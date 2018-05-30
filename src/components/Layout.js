import React, { Fragment, Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebar: false
    }
    this._openSidebar = this._openSidebar.bind(this)
    this._closeSidebar = this._closeSidebar.bind(this)
  }

  _openSidebar() {
    this.setState({...this.state, sidebar: true})
  }

  _closeSidebar() {
    this.setState({...this.state, sidebar: false})
  }

  render () {
    return <Fragment>
      <Header onMenuClick={this._openSidebar}/>
      <Sidebar open={this.state.sidebar} onClose={this._closeSidebar}/>
      <div>
         { this.props.children }
      </div>
    </Fragment>
  }
}

export default Layout
