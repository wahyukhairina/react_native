import { combineReducers } from 'redux'
import products from './product'
import cart from './cart'
import order from './checkout'
import auth from './auth'
import category from './category'
export default combineReducers({
  products,
  cart,
  order,
  auth,
  category
})