const initialState = {
  products: [],
  isLoading: false,
};

export default (products = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_PENDING':
      console.log('ini', action.payload);
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_PRODUCT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        products: action.payload.data.result,
      };
    case 'GET_SORT_PENDING':
      console.log('ini', action.payload);
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_SORT_REJECTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_SORT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        products: action.payload.data.result,
      };
    case 'POST_PRODUCT_PENDING':
      console.log('ini', action.payload);
      return {
        ...state,
        isLoading: true,
      };
    case 'POST_PRODUCT_REJECTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'POST_PRODUCT_FULFILLED':
      const newProducts = [...state.products, action.payload.data.result];
      return {
        ...state,
        isLoading: false,
        products: newProducts,
      };
    case 'DELETE_PRODUCTS_PENDING':
      return {
        ...state,
      };
    case 'DELETE_PRODUCTS_REJECTED':
      return {
        ...state,
      };
    case 'DELETE_PRODUCTS_FULFILLED':
      const newProductAfterDelete = state.products.filter(
        products => products.id !== action.payload.data.result,
      );
      return {
        ...state,
        isLoading: false,
        products: newProductAfterDelete,
      };
    case 'UPDATE_PRODUCTS_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'UPDATE_PRODUCTS_REJECTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'UPDATE_PRODUCTS_FULFILLED':
      console.log(action.payload);
      const newProductUpdate = state.products.map(products => {
        if (products.id === action.payload.data.result.productId) {
          return action.payload.data.result;
        }
        return products;
      });
      return {
        ...state,
        isLoading: false,
        products: newProductUpdate,
      };
    case 'SEARCH_PRODUCTS_PENDING':
      return {
        ...state,
      };
    case 'SEARCH_PRODUCTS_REJECTED':
      return {
        ...state,
      };
    case 'SEARCH_PRODUCTS_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result,
      };
    case 'SORT_PRODUCTS_PENDING':
      return {
        ...state,
      };
    case 'SORT_PRODUCTS_REJECTED':
      return {
        ...state,
      };
    case 'SORT_PRODUCTS_FULFILLED':
      return {
        ...state,
        products: action.payload.data.result,
      };
    default:
      return state;
  }
});
