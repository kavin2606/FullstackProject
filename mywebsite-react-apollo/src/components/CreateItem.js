import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($title: String!, $description: String!, $category: String!, $quantity: String!) {
    createItem(  title: $title, description: $description, category: $category, quantity: $quantity) {
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
  }

  render() {
    const { title, description, category,  quantity} = this.state
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
        </div>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={{ title, description, quantity, category }}>
            {createItemMutation => <button onClick={createItemMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateItem
