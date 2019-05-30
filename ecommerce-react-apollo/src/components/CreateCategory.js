import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATECATEGORY_MUTATION = gql`
  mutation CreateCategoryMutation($name: String!) {
    addcategory(name: $name) {
      id
      name
    }
  }
`
class CreateCategory extends Component {
  state = {
    name: '',
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A description for the item"
          />
        </div>
<Mutation mutation={CREATECATEGORY_MUTATION} variables={{ name }}>
  {CreateCategoryMutation => <button onClick={CreateCategoryMutation}>Submit</button>}
</Mutation>

      </div>
    )
  }
}

export default CreateCategory
