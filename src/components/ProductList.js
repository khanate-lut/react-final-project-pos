import React, { Component } from "react";
import Product from "./Product";
import Config from "./Config";

export default class ProductList extends Component {
  state = {
    productList: [],
    productType: 'Eyebrow'
  };

  loadDatafromAPI(productType) {
    fetch(`${Config.api}product_type=${productType}`)
    .then(response => response.json())
    .then(data => this.setState({ productList: data }))
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.loadDatafromAPI(this.state.productType);
  }

  handleProductItemClick = (item) => {
      console.log('ProductList handleProductItemClick', item);
      this.props.onProductItemClick(item);
  }

  handleProductTypeChange = (e) => {
    this.setState({ productType: e.target.value });
    this.loadDatafromAPI(e.target.value);
    this.setState({ productList: []});
  }

  render() {
    return (
      <div className="product-list">
        <div className="product-list-filter">
          <label>Product Type</label>
          <select onChange={ this.handleProductTypeChange }>
            <option>Eyebrow</option>
            <option>Eyeliner</option>
            <option>Bronzer</option>
            <option>Blush</option>
            <option>Eyeshadow</option>
            <option>Foundation</option>
            <option>Lip liner</option>
            <option>Lipstick</option>
            <option>Mascara</option>
            <option>Nail polish</option>
          </select>
        </div>
        <div className="row">
          {this.state.productList.length > 0 ? (
            this.state.productList.map((item, index) => {
              if (Number(item.price) > 0) {
                return <Product key={index} product={item} onProductItemClick={() => this.handleProductItemClick(item) } />;
              }
            })
          ) : (
            <div className="product-list-loading">Loading...</div>
          )}
        </div>
      </div>
    );
  }
}
