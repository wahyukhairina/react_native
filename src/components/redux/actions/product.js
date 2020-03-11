import axios from 'axios';

export const getProduct = () => {
  return {
    type: 'GET_PRODUCT',
    payload: axios({
      method: 'GET',
      url: 'http://192.168.1.27:8006/product'
    })
  }
}

export const postProduct = (data) => {
  return {
    type: 'POST_PRODUCT',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.1.22:8006/product',
      data: data
    })
  }
}

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCTS',
    payload: axios.delete(`http://192.168.1.22:8006/product/${id}`)
  }
}

export const updateProduct = (data, productId) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: axios({
      method: 'PATCH',
      url: `http://192.168.1.22:8006/product/${productId}`,
      data: data
    })
  }
}

export const searchProduct = (name) => {
  return {
    type: 'SEARCH_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `http://192.168.1.22:8006/product/?searchName=${name}`
    })
   
    
  }
}
