import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
  state = {
    users: []
  }
  async componentDidMount(){
    try {
      const response = await(axios.get('/users/users'))
      this.setState({users: response.data})
    } catch(error) {
      console.log('Failed to retrieve users!')
      console.log(error)
    }
  }
  render(){
    return (
      <div>
      {
        JSON.stringify(this.state.users)
      }
      </div>
    )
  }
}

export default User