import React, { Component } from "react";
import BasketItem from "./BasketItem";

export default class BasketList extends Component {

    handleRemoveProductClick = (item) => {
        console.log('BasketList handleRemoveProductClick', item);
        this.props.onRemoveProductClick(item);
    }

  render() {
    return (
      <div className="basket-list">
        <ul className="list-group">
          {this.props.productList.length > 0 ? (
            this.props.productList.map((item, index) => {
              return (
                <BasketItem
                  key={index}
                  product={item}
                  onRemoveProductClick={ () => this.handleRemoveProductClick(item) }
                />
              );
            })
          ) : (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              No data
            </li>
          )}
        </ul>
      </div>
    );
  }
}
