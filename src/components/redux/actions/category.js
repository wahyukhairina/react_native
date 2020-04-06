import axios from 'axios'
import {REACT_APP_API_URL} from 'react-native-dotenv';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios({
      method: 'GET',
      url: `${REACT_APP_API_URL}/category`
    })
  }
}

export const postCategory = (data) => {
  return {
    type: 'POST_CATEGORY',
    payload: axios.post(`${REACT_APP_API_URL}/category`, data)
  }
}

export const deleteCategory = (id) => {
  console.log(id)
  return {
    type: 'DELETE_CATEGORY',
    payload: axios.delete(`${REACT_APP_API_URL}/category/${id}`)
  }
}