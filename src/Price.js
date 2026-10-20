import React from "react";
import product from "./product";

function Price() {
  return <h3 className="product-price">${product.price.toFixed(2)}</h3>;
}

export default Price;
