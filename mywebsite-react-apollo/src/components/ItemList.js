import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Item from './Item'


const ITEM_QUERY = gql`
{
  getItems(filter: "Apple")
  {
     title
     description
  }
}`

// itemsToRender = data => {
//     const isNewPage = this.props.location.pathname.includes('new')
//     if (isNewPage) {
//       return data.feed.links
//     }
//     const rankedLinks = data.feed.links.slice()
//     rankedLinks.sort((l1, l2) => l2.votes.length - l1.votes.length)
//     return rankedLinks
//   }

class ItemList extends Component {
  // render() {
  //   return (
  //     <Query query={ITEM_QUERY}>
  //       {({ loading, error, data }) => {
  //       if (loading) return <div>Fetching</div>
  //       if (error) return <div>Error</div>
  //
  //       const itemsToRender = data.getItems
  //
  //       return (
  //         <div>
  //           itemsToRender.map(item => <Item key={item.id} item={item} />)}
  //         </div>
  //       )
  //     }}
  //     </Query>
  //   )
  // }

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
