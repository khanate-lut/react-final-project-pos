import React, { Component } from "react";
import Shelf from "./Shelf";
import Basket from "./Basket";

export default class POS extends Component {
  state = {
    basketProductList: []
  };

  handleCancelClick = () => {
    console.log("POS handleCancelClick");
  };

  handleSubmitClick = () => {
    console.log("POS handleSubmitClick");
    this.props.history.push(`/slip`);
  };

  handleProductItemClick = item => {
    console.log("POS handleProductItemClick", item);
    const newBasket = [...this.state.basketProductList];
    let checkDup = false;
    newBasket.forEach(product => {
      if (product.id === item.id) {
        product.qty++;
        product.price = parseFloat(product.price * product.qty);
        checkDup = true;
      }
    });
    if (!checkDup) {
      item.qty = 1;
      newBasket.push(item);
    }
    this.setState({
      basketProductList: newBasket
    });
  };

  handleRemoveProductClick = item => {
    console.log("POS handleRemoveProductClick", item);
    const newBasket = this.state.basketProductList.filter( x => x.id !== item.id);
    this.setState({
      basketProductList: newBasket
    });
  };

  handleCancelOrderClick = () => {
    console.log("POS handleCancelOrderClick");
    this.setState({
      basketProductList: []
    })
  }

  render() {
    return (
      <div className="container-full">
        <div className="row app-row">
          <div className="col-md-9">
            <Shelf
              onProductItemClick={item => this.handleProductItemClick(item)}
            />
          </div>
          <div className="col-md-3">
            <Basket
              productList={this.state.basketProductList}
              onCancelClick={this.handleCancelClick}
              onSubmitClick={this.handleSubmitClick}
              onRemoveProductClick={item => this.handleRemoveProductClick(item) }
              onCancelOrderClick={ this.handleCancelOrderClick }
            />
          </div>
        </div>
      </div>
    );
  }
}
