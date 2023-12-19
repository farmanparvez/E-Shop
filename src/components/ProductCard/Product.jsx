import React from "react";
import { Rate } from "antd";
import { baseURL } from "../../utils/enviroment";
import "./productCard.scss";

const Product = ({ product }) => {

  return (
    <div className="card-container">
      <div className="img-wrapper">
        <div className="image-box">
          <img src={baseURL + product.image} alt="" />
        </div>
      </div>
      <div className="details-box">
        <p>
          <strong>{product.name}</strong>
        </p>
        <Rate
          style={{ fontSize: "15px" }}
          disabled
          defaultValue={product.rating}
        />
        <p>
          <strong>${product.price}</strong>
        </p>
      </div>
    </div>
  );
};

export default Product;