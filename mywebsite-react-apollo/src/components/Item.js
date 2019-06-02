import React, { Component } from 'react'
import $ from 'jquery';
import {reactDOMNode} from 'react-dom'
class Item extends Component {
  render() {

    return (
      <div>
        <div>
        <table><tbody>
          <tr><td><img
            src={this.props.item.itemimg}
            alt={this.props.item.title}
            style={{width : '160px', height : '160px'}}
          /></td>
          <td><p>Item Title: {this.props.item.title} </p>
          <p>Item Id: {this.props.item.id}</p>
          <p>Description: {this.props.item.description}</p>
          <p>Quantity: {this.props.item.quantity}</p>
          <p>price: {this.props.item.price} </p></td>
          </tr>
          </tbody></table>
        </div>
      </div>
    )
  }
}

export default Item
