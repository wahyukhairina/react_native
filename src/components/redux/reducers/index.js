import { combineReducers } from 'redux'
import products from './product'
import cart from './cart'
import order from './checkout'
import auth from './auth'
export default combineReducers({
  products,
  cart,
  order,
  auth
})