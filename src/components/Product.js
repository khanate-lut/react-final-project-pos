import React, { Component } from "react";

export default class Product extends Component {

    handleProductAdd = () => {
        console.log('Product handleProductAdd');
        this.props.onProductItemClick(this.props.product);
    }

  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.product.image_link}
            width="200"
            height="200"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.brand}</h5>
            <p className="card-text">
              {this.props.product.name}
            </p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link product-card-price">
                {this.props.product.price}
            </a>
            <a href="#" className="btn btn-primary product-card-add" onClick={ this.handleProductAdd }>
                Add
            </a>
          </div>
        </div>
      </div>
    );
  }
}
