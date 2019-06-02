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

class CreateOrder extends Component {
  state = {
    id: ''
  }

  render() {
    const { id } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={id}
          onChange={e => this.setState({ id: e.target.value })}
          type="text"
          placeholder="Enter id for the item you want to buy"
        />
        </div>
        <Mutation mutation={PLACE_ORDER_MUTATION} variables={{ id }}>
            {placeOrderMutation => <button onClick={placeOrderMutation}>Buy</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateOrder
