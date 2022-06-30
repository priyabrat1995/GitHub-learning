import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsDashLg ,BsPlusLg } from "react-icons/bs";

const Details = () => {
  const [quantity ,setQuantity]=useState(1)
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  const decQuantity=()=>{
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col-6">
          <div className="details_img">
            <img src={`/Images/${product.image}`} alt="" />
          </div>
        </div>
        <div className="col-6">
          <div className="details_name">{product.name}</div>
          <div className="details_price">
            <i className="fa fa-inr"></i>
            <span className="actual_price">{product.price}</span>
            <span className="discount">{product.discount}%</span>
            <i className="fa fa-inr dscsym"></i>
            <span className="discount_price">{product.discountPrice}</span>
          </div>
          <div className="details_info">
            <span className="dec" onClick={decQuantity}><BsDashLg/></span>
            <span className="quan">{quantity}</span>
            <span className="inc" onClick={()=>{setQuantity(quantity+1)}}><BsPlusLg/></span>
            <button className="btn_cart" onClick={()=>{dispatch({type:'ADD_TO_CART' , payload:{product , quantity}})}}>Add To Cart</button>
          </div>
          <div className="deails_p">
            <h4>Details</h4>
            {product.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
