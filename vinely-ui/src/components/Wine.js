import React, {Component} from 'react'

class Wine extends Component {
  render() {
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Region: {this.props.region}</p>
        <p>Family: {this.props.type}</p>
        <p>Summary: {this.props.description}</p>
        <p>Price: {this.props.price}</p>
        <p>Qty in Stock{this.props.quantity}</p>
      </div>
    )
  }
}

export default Wine