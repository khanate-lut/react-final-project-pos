import React, { Component } from "react";
import BasketList from "./BasketList";
import Calculator from "./Calculator";
// import { threadId } from "worker_threads";

export default class Basket extends Component {
  state = {
    totalPrice: 0,
    prices: { receivePrice: 0, changeAmount: 0 },
    modal: ""
  };

  handleRemoveProductClick = item => {
    console.log("Basket handleRemoveProductClick", item);
    this.props.onRemoveProductClick(item);
  };

  componentDidMount() {}

  componentDidUpdate(oldProps, olsState) {
    console.log("Basket componentDidUpdate");
    if (oldProps.productList !== this.props.productList) {
      let total = 0;
      this.props.productList.forEach(item => {
        console.log(item.price);
        total += Number(item.price);
      });
      console.log(total);
      this.setState({ totalPrice: Number(total) });
    }
  }

  handleSubmitlick = () => {
    console.log("Basket handleSubmitlick");
    // save all basket to localStorage
    localStorage.setItem('basketProducts', JSON.stringify(this.props.productList));
    localStorage.setItem('prices', JSON.stringify(this.state.prices));
    localStorage.setItem('totalPrice', this.state.totalPrice);
    this.props.onSubmitClick();
  };

  handleCancelClick = () => {
    console.log("Basket handleCancelClick");
    this.setState({ modal: 'modal-show'});
  };

  handleCloseModal = () => {
    console.log("Basket handleCloseModal");
    this.setState({ modal: ''});
  }

  handleCancelOrderClick = () => {
    console.log("Basket handleCancelOrderClick");
    this.props.onCancelOrderClick();
    this.handleCloseModal();
  }

  handleReceivePriceChange = (prices) => {
    console.log('Inside Basket: new Prices:', prices)
    this.setState({ prices: prices });
  }

  render() {
    return (
      <div className="basket">
        <div>
          <label>
            <strong>Basket</strong>
          </label>
          <BasketList
            productList={this.props.productList}
            onRemoveProductClick={item => this.handleRemoveProductClick(item)}
          />
        </div>
        <div>
          <label>
            <strong>Calculator</strong>
          </label>
          <Calculator totalPrice={this.state.totalPrice} onReceivePriceChange={ this.handleReceivePriceChange } />
        </div>
        <hr width="300" />
        <button
          className="btn btn-warning"
          onClick={this.handleCancelClick}
        >
          Cancel
        </button>
        <button
          className="btn btn-success basket-button-confirm"
          onClick={this.handleSubmitlick}
        >
          Submit
        </button>

        {/* Modal Confirm Cancel */}
        <div id="myModal" className={`modal ${this.state.modal}`}>

          <div className="modal-content">
            <span className="close" onClick={ this.handleCloseModal }>&times;</span>
            <p>You confirm for cancel order ?</p>
            <div>
              <button className="btn btn-warning btn-confirm" onClick={ this.handleCancelOrderClick }>Confirm</button>
              <button className="btn btn-link" onClick={ this.handleCloseModal }>Close</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
