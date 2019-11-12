import React, { Component } from "react";

export default class Calculator extends Component {
  state = {
    receivePrice: 0.0,
    changeAmount: 0.0
  };

  handleRevicePriceChange = e => {
    // const floatRegExp = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$");
    console.log(e.target.value);
    if (e.target.value !== "" && !isNaN(e.target.value)) {
      const changeAmount = this.calculateChange(e.target.value);
      
      // send new prices to parent (Basket) inside an object
      this.props.onReceivePriceChange({
        receivePrice: parseFloat(e.target.value),
        changeAmount: changeAmount   // this.state.changeAmount not updated in time!
      });
    }
    
    this.setState({ receivePrice: e.target.value });
    
  };

  calculateChange = (receivePrice) => {
    const changeAmount =  receivePrice - this.props.totalPrice;
    this.setState({ changeAmount: changeAmount });
    return changeAmount;  // we need to use this value in handleReceivePriceChange, to send to parent
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Total Price
            <span>
              <strong>{this.props.totalPrice}</strong>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Receive Price
            <input
              type="number"
              className="input-number"
              onChange={this.handleRevicePriceChange}
              value={this.state.receivePrice}
            />
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Change Price
            <input
              type="text"
              className="input-number" disabled
              value={this.state.changeAmount}
            ></input>
          </li>
        </ul>
      </div>
    );
  }
}
