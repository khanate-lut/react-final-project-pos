import React, { Component } from "react";
import Product from "./Product";
import Config from "./Config";
import mockData from "./mock-data.json";
import QRCode from 'react-google-qrcode';

export default class ProductList extends Component {
  state = {
    productList: [],
    productType: "Eyebrow",
    productSelected: {},
    modal: ""
  };

  loadDatafromAPI = productType => {
    if (Config.api === "mock-data") {
      // for CORS
      const mock = JSON.parse(JSON.stringify(mockData));
      this.setState({ productList: mock });
    } else {
      fetch(`${Config.api}product_type=${productType}`)
        .then(response => response.json())
        .then(data => this.setState({ productList: data }))
        .catch(err => {
          console.error("call api error:", err);
          const mock = JSON.parse(JSON.stringify(mockData));
          this.setState({ productList: mock });
        });
    }
  };

  componentDidMount = () => {
    this.loadDatafromAPI(this.state.productType);
  };

  handleProductItemClick = item => {
    console.log("ProductList handleProductItemClick", item);
    this.props.onProductItemClick(item);
  };

  handleProductTypeChange = e => {
    this.setState({ productType: e.target.value, productList: [] });
    this.loadDatafromAPI(e.target.value);
  };

  handleSeeDetail = item => {
    console.log("ProductList handleSeeDetail");
    this.setState({ productSelected: item, modal: "modal-show" });
  };

  handleCloseModal = () => {
    console.log("ProductList handleCloseModal");
    this.setState({ modal: "" });
  };

  render() {
    return (
      <div className="product-list">
        <div className="product-list-filter">
          <label className="label-filter">Filter by Product Type </label>
          <select onChange={this.handleProductTypeChange}>
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
                return (
                  <Product
                    key={index}
                    product={item}
                    onProductItemClick={() => this.handleProductItemClick(item)}
                    onClick={() => this.handleSeeDetail(item)}
                  />
                );
              }
            })
          ) : (
            <div className="product-list-loading">Loading...</div>
          )}
        </div>

        {/* Modal Confirm Cancel */}
        <div id="myModal" className={`modal ${this.state.modal}`}>
          <div className="modal-content">
            <span className="close" onClick={this.handleCloseModal}>
              &times;
            </span>
            <h3>Product description</h3>
            <p className="text-left">
              <label><b>Name</b>: {this.state.productSelected.name} </label>
            </p>
            <p className="text-left">
              <label><b>Brand</b>: {this.state.productSelected.brand} </label>
            </p>
            <p className="text-left">
              <label>
                <b>Description</b>: {this.state.productSelected.description}{" "}
              </label>
            </p>
            <p className="text-left">
              <label><b>Price</b>: {this.state.productSelected.price} </label>
            </p>
            <hr width="200" />
            <div className="row">
              <div className="col-md-6">
                <p>Image</p>
                <img src={this.state.productSelected.image_link} />
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <p>Scan this for more detail</p>
                <QRCode data={this.state.productSelected.product_link} size={200} framed />
              </div>
              <div className="col-md-1"></div>
            </div>
            
            <div>
              <button className="btn btn-link" onClick={this.handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
