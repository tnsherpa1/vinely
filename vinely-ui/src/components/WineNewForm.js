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
        <form className="winebox" onSubmit={this.handleSubmit}>
          <ul className="wrapper">
            <li className="form-row">
              <label htmlFor="title">Title</label>
              <input name="title" type="text" placeholder="Name" onChange={this.handleChange}/>
            </li>
            <li className="form-row">
              <label htmlFor="description">Region</label>
              <input name="region" type="text" placeholder="Region" onChange={this.handleChange}/>
            </li>
            <li className="form-row">
              <label htmlFor="kind">Wine Family</label>
              <input name="kind" type="text" placeholder="Wine Family" onChange={this.handleChange}/>
            </li>
            <li className="form-row">
              <label htmlFor="price">Price</label>
              <input name="price" type="text" placeholder="Price" onChange={this.handleChange}/>
            </li>
            <li className="form-row">
              <label htmlFor="qty">Qty</label>
              <input name="qty" type="text" placeholder="Qty" onChange={this.handleChange}/>
            </li>
            <li className="form-row btn-row">
              <button type="submit">Add new wine</button>
            </li>
          </ul>
        <div className="summary">
            <textarea name="description" type="text" placeholder="Describe your wine" onChange={this.handleChange}/>
        </div>
        </form>
      </div>
    )
  }
}

export default WineNewForm