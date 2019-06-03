import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Item from './Item'


const ITEM_QUERY = gql`
{
  getItems(filter: "")
  {
     id
     title
     description
     quantity
     itemimg
     price
     category{
       id
       name
     }
  }
}`

class ItemList extends Component {
  render() {
    return (
      <Query query={ITEM_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const itemsToRender = data.getItems
          return (
            <div>
              {itemsToRender.map(item => <Item key={item.id} item={item} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ItemList
