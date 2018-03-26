import React, {Component} from 'react'
import axios from 'axios'
import Wine from './Wine'
import WineNewForm from './WineNewForm'

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

  createWine = async(wine, index) => {
    try {
      const newWineResponse = await axios.post(`/wines`, wine)
      const updatedWinesList = [...this.state.wines]
      updatedWinesList.push(newWineResponse.data)
      this.setState({wines: updatedWinesList})
    } catch(error) {
      console.log('Error creating new wine!')
      console.log(error)
    }
  }

  handleWineChange = (event, index) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value
    //ALL WINES
    const updatedWinesList = [...this.state.wines]
    //PARTICULAR Wine
    const wineToUpdate = updatedWinesList[index]
    //SET STATE
    wineToUpdate[attributeToChange] = newValue
    this.setState({wines: updatedWinesList})
  }

  updateWine = async (index) => {
    try {
      const wineToUpdate = this.state.wines[index]
      await axios.put(`/wines/${wineToUpdate.id}`, wineToUpdate)
    } catch(error) {
      console.log('Error updating wine!')
      console.log(error)
    }
  }

  deleteWine = async (wineId, index) => {
    try {
      await axios.delete(`/wines/${wineId}`)

      const updatedWinesList = [...this.state.wines]
      updatedWinesList.splice(index, 1)
      this.setState({wines: updatedWinesList})

    } catch (error) {
      console.log(`Error deleting Wines with ID of ${wineId}`)
      console.log(error)
    }
  }

  render() {
    const wineComponents = this.state.wines.map((wine, index)=>{
      return <Wine {...wine}
                   key={index}
                   index={index}
                   handleWineChange={this.handleWineChange}
                   updateWine={this.updateWine}
                   deleteWine={this.deleteWine}/>
    })
    return (
      <div>
        {wineComponents}
        <hr/>
        <WineNewForm createWine={this.createWine}/>
      </div>
    )
  }
}

export default WineList;