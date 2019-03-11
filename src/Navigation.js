import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from './components/Home'


// 
const Navigation = props => {
    return (
      <Router>
        <React.Fragment>
            <Route exact path="/" component={Home} />
        </React.Fragment>
      </Router>
    )
  }  
export default Navigation