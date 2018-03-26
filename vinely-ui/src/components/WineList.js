import React, {Component} from 'react'
import axios from 'axios'


class Wine extends Component {

  state = {
    wines: []
  }

  async componentWillMount() {
    try {
      const response = await axios.get('/wines')
      this.setState({ wines: response.data })
    } catch(error) {
      console.log('Error retrieving wines!')
      console.log(error)
    }

  }
  render() {
    return (
      <div>
        <h1>Welcome to Vinely!</h1>
        {
        JSON.stringify(this.state.wines)
        }
      </div>
    )
  }
}

export default Wine;