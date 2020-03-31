import axios from 'axios'
import {REACT_APP_API_URL} from 'react-native-dotenv';

export const postOrder = (data) => {
    console.log(data)
    return {
      type: 'POST_ORDER',
      payload: axios.post(`${REACT_APP_API_URL}/order`, data)
    }
  }
  
  export const getHistory = (startDate, endDate) => {
    console.log('ini date', startDate, endDate)
    return {
      type : 'GET_HISTORY',
      payload:  axios.get(`${REACT_APP_API_URL}/order?start=${startDate}&end=${endDate}`)
    }
  }
  