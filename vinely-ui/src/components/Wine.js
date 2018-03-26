import React, {Component} from 'react'

class Wine extends Component {
  render() {
    return (
      <div>
        <div>
          <input name="title"
                 onChange={(e)=>{this.props.handleWineChange(e, this.props.index)}}
                 onBlur={()=>this.props.updateWine(this.props.index)}
                 value={this.props.title} />
        </div>
        <p>Region: {this.props.region}</p>
        <p>Family: {this.props.type}</p>
        <p>Summary: {this.props.description}</p>
        <p>Price: {this.props.price}</p>
        <p>Qty in Stock: {this.props.quantity}</p>
      </div>
    )
  }
}

export default Wine