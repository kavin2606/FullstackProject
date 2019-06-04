import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Item from './Item'

const ITEM_SEARCH_QUERY = gql`
  query ItemSearchQuery($filter: String!) {
    getItems(filter: $filter) {

        id
        title
        description
        quantity
        postedBy {
          id
          name
        }
        category {
          id
          name
        }
        price
        itemimg
        postedBy
    {
      name
    }

    }
  }
`

class Search extends Component {

  state = {
    items: [],
    filter: ''
  }

  render() {
    return (
      <div>
        <div className="searchBar">
          <div className="searchText">Search</div>
          <input className="searchInput"
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button className="searchButton" onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.items.map((item, index) => (
          <Item key={item.id} item={item} index={index} />
        ))}
      </div>
    )
  }

  _executeSearch = async () => {
  const { filter } = this.state
  const result = await this.props.client.query({
    query: ITEM_SEARCH_QUERY,
    variables: { filter },
  })
  const items = result.data.getItems
  this.setState({ items })
}
}

export default withApollo(Search)
