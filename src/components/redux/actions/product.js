import axios from 'axios';

export const getProduct = () => {
  return {
    type: 'GET_PRODUCT',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:8006/product'
    })
  }
}
