import React, { Component } from "react";

export default class Slip extends Component {


  backClick = () => {
    this.props.history.push(`/`);
  }  

  render() {
    return (
      <div className="container-full slip-form">
        <div className="row justify-content-center">
          <div className="col-md-3">
            Slip
            <p>company: xxxxxx</p>
            <p>taxid : 1231231232</p>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                product name
                <span className="badge badge-pill">1000.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                product name
                <span className="badge badge-pill">1000.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                product name
                <span className="badge badge-pill">1000.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                product name
                <span className="badge badge-pill">1000.00</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                product name
                <span className="badge badge-pill">1000.00</span>
              </li>
            </ul>
          </div>
        </div>
        <hr width="300" />
        <button className="btn btn-warning" onClick={ this.backClick }>Back</button>
      </div>
    );
  }
}
