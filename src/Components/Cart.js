import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsDashLg, BsPlusLg ,BsFillFileXFill } from "react-icons/bs";

const Cart = () => {
  const { products ,totalQuantities ,totalPrice} = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="Cart_heading">
                  <div className="row">
                    <div className="col-2">picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row varticalAlign"  key={product.id}>
                    <div className="col-2">
                      <div className="cart_image">
                        <img src={`/Images/${product.image}`} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_Name">{product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart-dprice">
                        <i className="fa fa-inr dscsym"></i>
                        {product.discountPrice}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="details_info">
                        <span className="dec" onClick={()=>{dispatch({type:'DEC' ,payload:product.id})}}>
                          <BsDashLg />
                        </span>
                        <span className="quan">{product.quantity}</span>
                        <span className="inc" onClick={()=>{dispatch({type:'INC' ,payload:product.id})}}>
                          <BsPlusLg />
                        </span>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_total">
                      <i className="fa fa-inr dscsym"></i>{product.discountPrice * product.quantity}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_remove" onClick={()=>{dispatch({type:'REMOVE' ,payload:product.id})}}>
                        <BsFillFileXFill/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3">
                <div className="summery">
                  <div className="summery_heading">
                    Summerey
                  </div>
                  <div className="summery_details">
                    <div className="row mb-10">
                      <div className="col-6">
                        Total Items:
                      </div>
                      <div className="col-6 value">{totalQuantities}</div>
                    </div>
                    <div className="row mb-10">
                      <div className="col-6">Total Price:</div>
                      <div className="col-6"><i className="fa fa-inr dscsym"></i>{totalPrice}</div>
                    </div>
                  </div>
                  <button type="button" className="btn">CheckOut</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your Cart Is Empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
