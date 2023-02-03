import {
  GET_CATEGORIES,
  GET_SUB_CATEGORY,
  GET_PROFESSIONALS,
  GET_ID_PROFESSIONALS,
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
  GET_PROFESSIONALS_BY_PROFESSION,
  ORDER_BY_REVIEWS,
  FILTER_BY_PROVINCE,
  DELETE_SERVICE,
  DELETE_PROFILE,
  DELETE_USER,
  ADD_TO_CART,
  DELETE_TO_CART,
} from "../../utils";

const initialState = {
  categories: [],
  profession: [],
  allProfessionals: [],
  detail: [],
  subCategory: [],
  user: [],
  professionals: [],
  services: [],
  reviews: [],
  worker:[],
  shoppingCart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
      };
    case GET_PROFESSIONALS:
      return {
        ...state,
        professionals: action.payload,
        allProfessionals: action.payload,
      };
    case GET_ID_PROFESSIONALS:
      return {
        ...state,
        detail: action.payload,
      };
      case GET_PROFESSIONALS_BY_PROFESSION:
       
      return {
        ...state,
        worker: action.payload,
        // professionals: action.payload,
        // allProfessionals: action.payload,


      };
      case GET_USER:
        return{
          ...state,
          user: action.payload
        }
      case DELETE_USER:
        return {
          ...state,
          user:action.payload
        }

    default:
      return state;
  }
}

export default rootReducer;
