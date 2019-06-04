import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($title: String!, $description: String!, $category: String!, $quantity: String!,$price:String!,$itemimg:String) {
    createItem(  title: $title, description: $description, category: $category, quantity: $quantity,price:$price,itemimg:$itemimg) {
      title
    }
  }
`

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    category: '',
    quantity: '',
    price:'',
    itemimg:''
  }

  render() {
    const { title, description, category,  quantity,price,itemimg} = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={title}
          onChange={e => this.setState({ title: e.target.value })}
          type="text"
          placeholder="A title for the item"
        />
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the item"
          />
          <input
            className="mb2"
            value={category}
            onChange={e => this.setState({ category: e.target.value })}
            type="text"
            placeholder="The category for the item"
          />
          <input
            className="mb2"
            value={quantity}
            onChange={e => this.setState({ quantity: e.target.value })}
            type="text"
            placeholder="The quantity for the item"
          />
          <input
            className="mb2"
            value={price}
            onChange={e => this.setState({ price: e.target.value })}
            type="text"
            placeholder="The price for the item"
          />
          <input
            className="mb2"
            value={itemimg}
            onChange={e => this.setState({ itemimg: e.target.value })}
            type="text"
            placeholder="The Item image for the image"
          />
        </div>
        <Link to="/ThankyouForListingItem" className="ml1 no-underline white">
          <Mutation mutation={CREATE_ITEM_MUTATION} variables={{ title, description, quantity, category,price,itemimg }}>
              {createItemMutation => <button onClick={
                async () => {
                  await createItemMutation({ variables: { title, description, quantity, category,price,itemimg } })
              }}>Submit</button>}
          </Mutation>
        </Link>
      </div>
    )
  }
}

export default withRouter(CreateItem)
