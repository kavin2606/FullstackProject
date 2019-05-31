import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


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
//   onChange(e)
// {
//   let files =e.target.files;
//   let reader = new FileReader();
//   reader.readAsDataURL(files[0]);
//   reader.onload=(e)=>{
//     this.setState({ itemimg: e.target.result })
//   }
//
// }
          // <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>

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
            placeholder="The quantity for the item"
          />
          <input
            className="mb2"
            value={itemimg}
            onChange={e => this.setState({ itemimg: e.target.value })}
            type="text"
            placeholder="The quantity for the image"
          />
        </div>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={{ title, description, quantity, category,price,itemimg }}>
            {createItemMutation => <button onClick={createItemMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateItem
