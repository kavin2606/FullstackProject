import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Order from './Order'


const ORDER_QUERY = gql`
{
  usersorders
  {
  	name
    orderdetails
    {
      itempurchased
      {
        id
        title
        description
        itemimg
        price
      }
    }
  }
}`

class OrderList extends Component {

  render() {
    return (
      <Query query={ORDER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const ordersToRender = data.usersorders.orderdetails

          return (
            <div>
              {ordersToRender.map(order => <Order key={order.itempurchased.id} order={order} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default OrderList
