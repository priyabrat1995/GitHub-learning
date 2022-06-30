import React from 'react'
const initState = {
    products : [],
    totalPrice: 0,
    totalQuantities:0
}



const CartReducer = (state=initState , action) => {
    let addproduct;
    let index;
  switch(action.type){
    case "ADD_TO_CART":
       
        const {product , quantity} =action.payload;
        console.log(product.id)
        const check = state.products.find(pr=>pr.id=== product.id)
        if(check){
            return state;
        }else{
            const Tprice=state.totalPrice + product.discountPrice * quantity;
            const Tquantities=state.totalQuantities + quantity;
            product.quantity = quantity;
            return {
                ...state,products :[...state.products ,product],totalPrice:Tprice, totalQuantities:Tquantities
            }
        }
        case 'INC':
            addproduct =state.products.find(product=>product.id === action.payload);
            index =state.products.findIndex(product=>product.id === action.payload);
            addproduct.quantity += 1;
            state.products[index] = addproduct;
            return {
                ...state,
                totalPrice:state.totalPrice + addproduct.discountPrice ,
                totalQuantities:state.totalQuantities + 1
            } 
            case 'DEC':
                addproduct =state.products.find(product=>product.id === action.payload);
                index =state.products.findIndex(product=>product.id === action.payload);
                if(addproduct.quantity > 1){
                            addproduct.quantity -= 1;
                            state.products[index] = addproduct;
                            return{
                                ...state,
                                totalPrice:state.totalPrice - addproduct.discountPrice ,
                                totalQuantities:state.totalQuantities - 1
                            }
                }else{
                    return state
                }
                case 'REMOVE':
                    addproduct =state.products.find(product=>product.id === action.payload);
                    const filtered = state.products.filter(product=>product.id !== action.payload);
                    return {
                        ...state,
                        products:filtered,
                        totalPrice:state.totalPrice - addproduct.discountPrice * addproduct.quantity,
                        totalQuantities:state.totalQuantities - addproduct.quantity
                    }




    default:
        return state;

  }
}

export default CartReducer