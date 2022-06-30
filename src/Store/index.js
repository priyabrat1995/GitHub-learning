import { createStore } from "redux";
import { combineReducers } from "redux";
import ProductsReducer from "./Reducer/ProductsReducer";
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import CartReducer from "./Reducer/CartReducer";

const root=combineReducers({
    ProductsReducer,
    CartReducer
})
const store=createStore(root ,devToolsEnhancer())
export default store;