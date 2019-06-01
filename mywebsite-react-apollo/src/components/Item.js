import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <div>
        <div>
          <p>
            <p>Item Title: {this.props.item.title} </p>
            <p>Title Id: {this.props.item.id}</p>
            <p>Description: ({this.props.item.description})</p>
            <p>Quantity: {this.props.item.quantity}</p>
          </p>
          <hr></hr>
        </div>
      </div>
    )
  }
}

export default Item
