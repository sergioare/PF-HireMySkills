import{
    GET_CATEGORIES,
    GET_SUB_CATEGORY,
    GET_PROFESSIONALS,
    GET_USER,
    GET_USER_BY_ID,
    SEARCH,
    POST_SERVICES,
    POST_CATEGORIES,
    POST_SUB_CATEGORY,
    POST_PROFESSIONALS,
    POST_USER,
    POST_REVIEWS,
    ORDER_BY_RATING,
    ORDER_BY_NAME,
    ORDER_BY_REVIEWS,
    FILTER_BY_PROVINCE,
    DELETE_SERVICE,
    DELETE_PROFILE,
    DELETE_USER,
    ADD_TO_CART,
    DELETE_TO_CART,
  } from '../../utils'

  const initialState = {
  categories: [],
  profession:[],
  user:[],
  professionals:[],
  services:[],
  reviews:[],
  shoppingCart:[],

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;