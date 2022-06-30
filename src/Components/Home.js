import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'


const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);

  return (
    <div>
      <Header />
      
      <div className="container mtb-30">
        <div className="row">
          {products.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="product">
                <div className="product_img">
                  <Link to={`/details/${item.id}`}>
                  <img
                    className="img"
                    src={`/Images/${item.image}`}
                    alt="image name"
                  /></Link>
                </div>
                <div className="product-name">{item.name}</div>
                <div className="row">
                  <div className="col-6">
                    <div className="product_price">
                    <i className="fa fa-inr"></i><span className="price">{item.price}</span>
                    <span className="disc">{item.discount}%</span></div>
                  </div>
                  <div className="col-6">
                    <div className="product_disc-price">
                    <i className="fa fa-inr"></i>{item.discountPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
