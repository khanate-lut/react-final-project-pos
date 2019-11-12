import React, { Component } from "react";

export default class BasketItem extends Component {
  handleRemoveClick = () => {
    console.log("BasketItem handleRemoveClick");
    this.props.onRemoveProductClick()
  };
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.product.name}
        <span className="badge badge-pill">1pc.</span>
        <span className="badge badge-info badge-pill">
          {this.props.product.price}
        </span>
        <span
          className="badge badge-danger badge-pill"
          onClick={this.handleRemoveClick}
        >
          X
        </span>
      </li>
    );
  }
}
