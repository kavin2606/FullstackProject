import React, { Component } from 'react'
import Item from './Item'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GETITEMS_QUERY = gql`
  {
      getItems {
        id
        title
        description
        }
  }
`
class ItemList extends Component {
  render() {
    return (
      <Query query={GETITEMS_QUERY}>
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
