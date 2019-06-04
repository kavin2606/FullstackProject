import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const ORDER_QUERY = gql`
{
  usersorders
  {
    name
  }
}`

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap navbar">
      <div className="flex flex-fixed white">
      <div className="fw9 mr3 companyName">ShoppyHub</div>
      <Link to="/" className="ml1 no-underline white">
      home
      </Link>
      <div className="ml1">|</div>
      <Link to="/search" className="ml1 no-underline white">
      search
      </Link>
      {authToken && (
        <div className="flex">
        <div className="ml1">|</div>
        <Link to="/create" className="ml1 no-underline white">
        create item
        </Link>
        <div className="ml1">|</div>
        <Link to="/buy" className="ml1 no-underline white">
        buy
        </Link>
        <div className="ml1">|</div>
        <Link to="/order" className="ml1 no-underline white">
        purchase history
        </Link>
        </div>
      )}
      </div>
      <div className="flex flex-fixed">
      {authToken ? (
        <div className="ml1 pointer white"
        onClick={() => {
          localStorage.removeItem(AUTH_TOKEN)
          this.props.history.push(`/`)
        }}>
        <div className="ml1 pointer white">Hi
        <Query query={ORDER_QUERY}>
        {({loading,data})=>{
          if (loading) return 'loading...';
          const {usersorders} = data;
          return usersorders.name;
        }}
        </Query>
        </div>&nbsp;logout</div>
      ):(
        <Link to="/login" className="ml1 no-underline white">
        login
        </Link>
      )
    }
    </div>
    </div>
  )
}
}

export default withRouter(Header)
