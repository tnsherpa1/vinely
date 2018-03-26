import React, {Component} from 'react'

class Wine extends Component {
  render() {
    return (
      <div>
        <h2>Best Selling Wines:</h2>
        <div className="display">
          <input name="title"
                 onChange={(e)=>{this.props.handleWineChange(e, this.props.index)}}
                 onBlur={()=>this.props.updateWine(this.props.index)}
                 value={this.props.title} />
        </div>
        <div className="display">
          <input name="region"
                 onChange={(e)=>{this.props.handleWineChange(e, this.props.index)}}
                 onBlur={()=>this.props.updateWine(this.props.index)}
                 value={this.props.region} />
        </div>
        <div className="display">
          <input name="kind"
                 onChange={(e)=>{this.props.handleWineChange(e, this.props.index)}}
                 onBlur={()=>this.props.updateWine(this.props.index)}
                 value={this.props.kind} />
        </div>
        <div className="display">
          <textarea name="summary"
                 onChange={(e)=>{this.props.handleWineChange(e, this.props.index)}}
                 onBlur={()=>this.props.updateWine(this.props.index)}
                 value={this.props.description} />
        </div>
        <div className="display">
          <input name="price"
                 onChange={(e)=>{this.props.handleWineChange(e, this.props.index)}}
                 onBlur={()=>this.props.updateWine(this.props.index)}
                 value={this.props.price} />
        </div>
        <div className="display">
          <input name="qty"
                 onChange={(e)=>{this.props.handleWineChange(e, this.props.index)}}
                 onBlur={()=>this.props.updateWine(this.props.index)}
                 value={this.props.qty} />
        </div>
        <div>
          <button className="del"
            onClick={() => this.props.deleteWine(this.props.id, this.props.index)}>
            Delete
          </button>
        </div>

      </div>
    )
  }
}

export default Wine