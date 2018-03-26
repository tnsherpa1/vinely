import React, {Component} from 'react'

class WineNewForm extends Component {
  state = {
    newWine: {}
  }

  handleChange= (e) => {
    const attributeToChange = e.target.name
    const newValue = e.target.value

    const updatedNewWine = { ...this.state.newWine }
    updatedNewWine[attributeToChange] = newValue
    this.setState({ newWine: updatedNewWine })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createWine(this.state.newWine)
  }
  render() {
    return (
      <div>
      <h2>Remember your recent favorite wine?</h2>
      <h2>Add it here before you forget...</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" placeholder="Name" onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input name="region" type="text" placeholder="Region" onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="kind">Wine Family</label>
            <input name="kind" type="text" placeholder="Wine Family" onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="description">Summary</label>
            <textarea name="description" type="text" placeholder="Description" onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input name="price" type="text" placeholder="Price" onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="qty">Qty</label>
            <input name="qty" type="text" placeholder="Qty" onChange={this.handleChange}/>
          </div>
          <div>
            <input type="submit" value="Add New Wine"/>
          </div>
        </form>
      </div>
    )
  }
}

export default WineNewForm