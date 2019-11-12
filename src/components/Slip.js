import React, { Component } from "react";
import Config from "./Config";
import SlipItem from './SlipItem';

export default class Slip extends Component {
  state = {
    productList: [],
    totalPrice: 0.0,
    receivePrice: 0.0,
    changeAmount: 0.0
  };

  backClick = () => {
    localStorage.clear();
    this.props.history.push(`/`);
  };

  componentDidMount = () => {
    let productList = JSON.parse(localStorage.getItem("basketProducts"));
    const prices = JSON.parse(localStorage.getItem("prices"));
    const totalPrice = localStorage.getItem("totalPrice");

    if (productList === null) {
      productList = [];
    }

    let receivePrice = 0.0;
    let changeAmount = 0.0;
    if (prices !== null) {
      receivePrice = prices.receivePrice;
      changeAmount = prices.changeAmount;
    }

    this.setState({
      productList: productList,
      totalPrice: isNaN(totalPrice) ? 0.0 : totalPrice,
      receivePrice: receivePrice,
      changeAmount: changeAmount
    });
  };

  render() {
    return (
      <div className="container-full slip-form">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h2>Slip</h2>
            <hr width="100"/>
            <p className="text-left slip-title"><b>Company:</b> {Config.company}</p>
            <p className="text-left slip-title"><b>Tax ID:</b> {Config.taxId}</p>
            <p className="text-left slip-title">Basket list.</p>
            <ul className="list-group">
              {this.state.productList.length > 0 ? (
                this.state.productList.map((product, index) => {
                  return (
                    <SlipItem product={ product } key={ index } />
                  );
                })
              ) : (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  No data
                </li>
              )}
            </ul>
            <hr width="100" />
            <ul className="list-group">
              {
                this.state.productList.length > 0 ? (
                  <span>
                    <li className="list-group-item d-flex justify-content-between align-items-center slip-item-total">
                      Total Price
                      <span>
                        <strong>{this.state.totalPrice}</strong>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center slip-item-total">
                      Receive Price
                      <span>
                        <strong>{this.state.receivePrice}</strong>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center slip-item-total">
                      Change Price
                      <span>
                        <strong>{this.state.changeAmount}</strong>
                      </span>
                    </li>
                  </span>
                ) : (
                  <span></span>
                )
              }
            </ul>
          </div>
        </div>
        <hr width="300" />
        <button className="btn btn-warning" onClick={this.backClick}>
          Back
        </button>
      </div>
    );
  }
}
