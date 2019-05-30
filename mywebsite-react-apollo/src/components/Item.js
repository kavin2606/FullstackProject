import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.item.description} ({this.props.item.title}, {this.props.item.quantity})
        </div>
      </div>
    )
  }
}

export default Item
