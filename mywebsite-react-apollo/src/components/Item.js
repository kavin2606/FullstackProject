import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.item.description} ({this.props.item.title})
        </div>
      </div>
    )
  }
}

export default Item
