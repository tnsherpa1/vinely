import React, { Component } from 'react'
import WineList from './components/WineList'
import UserList from './components/UserList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WineList/>
        <UserList/>
      </div>
    );
  }
}

export default App;
