import React, { Component } from 'react'

class Item extends Component {
  render() {
    const my_img = this.props.item.itemimg;
    return (
      <div>
        <div>
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt={this.props.item.title}
            style={{width : '100px', height : '100px'}}
          />
          <p>Item Title: {this.props.item.title} </p>
          <p>Item Id: {this.props.item.id}</p>
          <p>Description: {this.props.item.description}</p>
          <p>Quantity: {this.props.item.quantity}</p>

          <hr></hr>
        </div>
      </div>
    )
  }
}

export default Item
