import React, { Component } from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import '../stylesheets/all.css.scss'

import Header from './PageComponents/front_end/Header'
import Home from './Pages/front_end/Home'
import Product from './Pages/front_end/Product'
import Category from './Pages/front_end/Category'


class App extends Component {
  componentDidMount() {
    // Check to see if user is logged in
    this.props.fetchUser().then(() => {
      if (this.props.auth) {
        // If logged in, check for cart.
        this.props.usersCart(this.props.auth._id)
      }
    })
    this.props.allInstockProducts()
  }

  render() {
    console.log(this.props)
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Header />
            <div id="body_content_container">
              <Route exact path="/" component={Home} />
              <Route exact path="/shop/:category" component={Category} />
              <Route exact path="/shop/:category/:product" component={Product} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps({ auth, cart }) {
  return { auth, cart }
}


export default connect(mapStateToProps, actions)(App)