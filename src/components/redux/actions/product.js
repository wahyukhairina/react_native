import axios from 'axios';
import {REACT_APP_API_URL} from 'react-native-dotenv';

export const getProduct = () => {
  return {
    type: 'GET_PRODUCT',
    payload: axios({
      method: 'GET',
      url: `${REACT_APP_API_URL}/product/`,
    }),
  };
};

export const getSort = type => {
  return {
    type: 'GET_PRODUCT',
    payload: axios({
      method: 'GET',
      url: `${REACT_APP_API_URL}/product/?category=${type}`,
    }),
  };
};

export const postProduct = data => {
  return {
    type: 'POST_PRODUCT',
    payload: axios({
      method: 'POST',
      url: `${REACT_APP_API_URL}/product`,
      data: data,
    }),
  };
};

export const deleteProduct = id => {
  return {
    type: 'DELETE_PRODUCTS',
    payload: axios.delete(`${REACT_APP_API_URL}/product/${id}`),
  };
};

export const updateProduct = (data, productId) => {
  return {
    type: 'UPDATE_PRODUCTS',
    payload: axios({
      method: 'PATCH',
      url: `${REACT_APP_API_URL}/product/${productId}`,
      data: data,
    }),
  };
};

export const searchProduct = name => {
  return {
    type: 'SEARCH_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `${REACT_APP_API_URL}/product/?searchName=${name}`,
    }),
  };
};

export const sortProduct = type => {
  return {
    type: 'SORT_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `${REACT_APP_API_URL}/product/?sort=price&type=${type}`,
    }),
  };
};
