import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const PLACE_ORDER_MUTATION = gql`
  mutation PlaceOrderMutation($id: String!)
  {
    placeorder(id: $id)
    {
      id
    }
  }
`
class Item extends Component {
  render() {
    let id = this.props.item.id;
    return (
      <div>
        <div>
        <table><tbody>
          <tr><td style={{width:200}} ><img
            src={this.props.item.itemimg}
            alt={this.props.item.title}
            style={{width : '160px', height : '160px'}}
          /></td>
          <td style={{width:500}}><p>Item Title: {this.props.item.title} </p>
          <p>Description: {this.props.item.description}</p>
          <p>Quantity: {this.props.item.quantity}</p>
          <p>price: {this.props.item.price} </p></td>

          <td>
                  <Mutation mutation={PLACE_ORDER_MUTATION} variables={{id}}>
                      {placeOrderMutation => <button onClick={placeOrderMutation}>Buy now</button>}
                  </Mutation>
                  </td>
          </tr>
          </tbody></table>
        </div>
      </div>
    )
  }
}

export default Item
