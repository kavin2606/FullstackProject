import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

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
    const authToken = localStorage.getItem(AUTH_TOKEN)
    let id = this.props.item.id;
    return (
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <td style={{width:250}}>
                  <img src={this.props.item.itemimg} alt={this.props.item.title} style={{width : '200px', height : '160px'}}/>
                </td>
                <td style={{width:700}}>
                  <p><b>Item:</b> {this.props.item.title} </p>
                  <p><b>Description:</b> {this.props.item.description}</p>
                  <p><b>Price:</b> {this.props.item.price} </p>
                  <p><b>Quantity:</b> {this.props.item.quantity}</p>
                  <p><b>Category:</b> {this.props.item.category.name}</p>
                  <p><b>Item Id:</b> {this.props.item.category.id}</p>
                  <p><b>Posted By:</b> {this.props.item.postedBy.name}</p>
                </td>
                {authToken && (
                  <td>
                  <Link to="/ThankyouForPurchase" className="ml1 no-underline white">
                    <Mutation mutation={PLACE_ORDER_MUTATION} variables={{id}}>
                    {placeOrderMutation => <button onClick={
                      async () => {
                        await placeOrderMutation({ variables: { id } })
                    }}>Buy now</button>
                      }
                    </Mutation>
                    </Link>
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <hr></hr>
      </div>
    )
  }
}

export default withRouter(Item)
