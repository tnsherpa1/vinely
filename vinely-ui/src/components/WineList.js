import React, {Component} from 'react'
import axios from 'axios'
import Wine from './Wine'


class WineList extends Component {

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
    const wineComponents = this.state.wines.map((wine)=>{
      return <Wine title={wine.title}
                   region={wine.region}
                   type={wine.kind}
                   description={wine.description}
                   quantity={wine.qty}
                   price={wine.price}/>
    })
    return (
      <div>
        <h1>Best Selling Wines:</h1>
        {wineComponents}
      </div>
    )
  }
}

export default WineList;