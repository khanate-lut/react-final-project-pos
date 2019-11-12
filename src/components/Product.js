import React, { Component } from "react";

export default class Product extends Component {
  handleProductAdd = (e) => {
    console.log("Product handleProductAdd");
    e.stopPropagation();
    
    this.props.onProductItemClick(this.props.product);
  };

  handleProductClick = (e) => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="col-md-3">
        <div className="card" onClick={this.handleProductClick}>
          <img
            className="card-img-top"
            src={this.props.product.image_link}
            width="200"
            height="200"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.brand}</h5>
            <p className="card-text">{this.props.product.name}</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link product-card-price">
              {this.props.product.price}
            </a>
            <a
              href="#"
              className="btn btn-primary product-card-add"
              onClick={this.handleProductAdd}
            >
              Add
            </a>
          </div>
        </div>
      </div>
    );
  }
}
