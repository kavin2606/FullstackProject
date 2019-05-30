import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATEITEM_MUTATION = gql`
  mutation createItemMutation($description: String!, $title: String!, $quantity:String!, $category:String! ) {
    createItem(description: $description, title: $title, quantity:$quantity, category:$category ) {
      title
      description
      quantity
      category{
        name
      }
    }
  }
`
class CreateItem extends Component {
  state = {
    description: '',
    title: '',
    quantity:'',
    category:'',
  }

  render() {
    const { description, title,quantity,category } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the item"
          />
          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="The title for the item"
          />
          <input
            className="mb2"
            value={quantity}
            onChange={e => this.setState({ quantity: e.target.value })}
            type="text"
            placeholder="quantity of the item"
          />
          <input
            className="mb2"
            value={category}
            onChange={e => this.setState({ category: e.target.value })}
            type="text"
            placeholder="The category for the item"
          />
        </div>
<Mutation mutation={CREATEITEM_MUTATION} variables={{ description, title,quantity,category }}>
  {createItemMutation => <button onClick={createItemMutation}>Submit</button>}
</Mutation>

      </div>
    )
  }
}

export default CreateItem
