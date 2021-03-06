import React, { Component } from 'react'
import Payment from '../../../../components/Payments'

class PaymentPanel extends Component  {
  constructor(props) {
    super()
    this.state = {

    }
  }

  
  render() {
    console.log(this.props)
    // Make sure to fire off the chooseTab() function to get the user to the review screen once they have paid
    return (
      <>
        <Payment 
          cart={this.props.cart}
          preExistingShipping={this.props.preExistingShipping} 
          preExistingBilling={this.props.preExistingBilling} 
          makeNewOrderAvailable={this.props.makeNewOrderAvailable} 
          chooseTab={this.props.chooseTab} 
          updateCart={this.props.updateCart}
        />
      </>
    )
  }
}


export default PaymentPanel