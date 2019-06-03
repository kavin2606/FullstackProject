import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ItemList from './ItemList'
import Header from './Header'
import Login from './Login'
import Search from './Search'
import CreateItem from './CreateItem'
import CreateOrder from './CreateOrder'
import OrderList  from './OrderList'
import ThankyouForPurchase from './ThankyouForPurchase'
import '../styles/App.css';

class App extends Component {

  state = {};

  render() {
    return(
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route exact path='/create' component={CreateItem} />
          <Route exact path='/buy' component={CreateOrder} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/order' component={OrderList} />
          <Route exact path='/ThankyouForPurchase' component={ThankyouForPurchase} />
        </Switch>
      </div>
    </div>
  )}
}

export default App
