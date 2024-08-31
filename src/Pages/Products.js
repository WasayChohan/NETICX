import React from "react";
import "./Products.css";
import img18 from "../assets/Images/img18.png";
import { ArrowForwardIos } from "@mui/icons-material";

function Products() {
  const product = [
    {
      id: 1,
      img: img18,
      product_text_h1: "NFT Marketplace",
      product_p1:
        " Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      product_text_h5: "Explor",
    },
    {
      id: 1,
      img: img18,
      product_text_h1: "NFT Marketplace",
      product_p1:
        " Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      product_text_h5: "Explor",
    },
    {
      id: 1,
      img: img18,
      product_text_h1: "NFT Marketplace",
      product_p1:
        " Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      product_text_h5: "Explor",
    },
  ];

  return (
    <div className="products">
      <div className="product-color-line"></div>
      <h1 className="product-h1">Our Products</h1>

      {product.map((product) => (
        <div className="product" key={product.id}>
          <img className="product-img" src={product.img} alt="" width="601px" />
          <div className="product-text-parent">
            <div className="product-text">
              <h1 className="product-text-h1"> {product.product_text_h1} </h1>
              <p className="product-p1">{product.product_p1}</p>

              <span>
                <h5 className="explore-alignment">
                  Explore <ArrowForwardIos />
                </h5>
              </span>
            </div>
          </div>
        </div>
      ))}

      <button className="product-btn">Explore more product</button>
    </div>
  );
}

export default Products;
