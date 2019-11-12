import React from "react";

const SlipItem = props => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.product.name}
      <span className="badge badge-pill">{props.product.qty} pc.</span>
      <span className="badge badge-pill">{props.product.price}</span>
    </li>
  );
};

export default SlipItem;
