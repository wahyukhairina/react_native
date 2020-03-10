const initialState = {
    products: [],
    isLoading: false
  };
  
  export default products = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCT_PENDING':
          (console.log('ini',action.payload))
        return {
          ...state,
          isLoading: true
        };
      case 'GET_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: true
        };
      case 'GET_PRODUCT_FULFILLED':
        return {
          ...state,
          isLoading: false,
          products: action.payload.data
        }
      default:
        return state
  
    }
  }