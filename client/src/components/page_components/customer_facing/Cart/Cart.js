import React, { Component } from 'react'
import { connect } from 'react-redux'
import LineItem from '../LineItem'
import { updateCart } from '../../../../actions'
import './cart.css.scss'


class Cart extends Component {
  constructor(props) {
    super()
    this.state = {showCart: false}
  }
  expandCart() {
    let boolean = this.state.showCart
    this.setState({ showCart: !boolean})
  }

  renderExpandedCart() {
    return this.props.cart.line_items.map(line_item => {
      return <LineItem updateCart={this.props.updateCart} line_item={line_item} cart={this.props.cart} />
    });
  }

  renderCartLength() {
    let calculated_cart_length = null
    if(this.props.cart) {
      this.props.cart.line_items.forEach(line_item => {
        calculated_cart_length = calculated_cart_length + line_item.quantity
      });
    }
    return (
      <div style={{ display: 'flex', backgroundColor: 'darkred', padding: '0px 10px' }} onClick={this.expandCart.bind((this))}>
        {calculated_cart_length}
        <i className="fas fa-shopping-cart"></i>
      </div>
    )
  }

  render() {
    return (
    <div>
      {this.renderCartLength()}
      {this.state.showCart === false ? "" : 
          <ul className="expandedCart">{this.renderExpandedCart()}</ul>}
    </div>
    )
  }
}

function mapStateToProps({ auth, cart, products }) {
  return { auth, cart, products }
}

export default connect(mapStateToProps, {updateCart})(Cart)