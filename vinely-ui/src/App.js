import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import WineList from './components/WineList'
import UserList from './components/UserList'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mywines" component={WineList} />
          <Route exact path="/myusers" component={UserList} />
          <Route render={ ()=><p>Not Found</p> } />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
