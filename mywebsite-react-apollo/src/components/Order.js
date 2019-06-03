import React, { Component } from 'react'

class Order extends Component {
  render() {
    return (
      <div>
        <div>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={this.props.order.itempurchased.itemimg} alt={this.props.order.itempurchased.title} style={{width : '160px', height : '160px'}}/>
              </td>
              <td>
                <p><b>Purchased Item:</b> {this.props.order.itempurchased.title}</p>
                <p><b>Description:</b> {this.props.order.itempurchased.description}</p>
                <p><b>Price:</b> {this.props.order.itempurchased.price}</p>
                <p><b>Purchased Item Id:</b> {this.props.order.itempurchased.id}</p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Order
