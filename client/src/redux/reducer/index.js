//ACTIONS TYPES
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUB_CATEGORY = "GET_SUB_CATEGORY";
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";
export const GET_PROFESSIONALS_BY_PROFESSION = "GET_PROFESSIONALS_BY_PROFESSION";
export const GET_SERVICES = "GET_SERVICES";
export const SEARCH = "SEARCH";
export const POST_SERVICES = "POST_SERVICES";
export const POST_CATEGORIES = "POST_CATEGORY";
export const POST_SUB_CATEGORY = "POST_SUB_CATEGORY";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_REVIEWS = "ORDER_BY_REVIEWS";
export const FILTER_BY_PROVINCE = "FILTER_BY_PROVINCE";
export const DELETE_SERVICE = "DELETE_SERVICE";

const initialState = {
  categories: [],
  subCategory: [],
  professionals: [],
  worker:[],
  allProfessionals: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    case "GET_SUB_CATEGORY":
      return {
        ...state,
        subCategory: action.payload,
      };
    case "GET_PROFESSIONALS":
      return {
        ...state,
        professionals: action.payload,
        allProfessionals: action.payload,
      };
      case "GET_PROFESSIONALS_BY_PROFESSION":
       
      return {
        ...state,
        worker: action.payload,
        // professionals: action.payload,
        // allProfessionals: action.payload,


      };
    default:
      return state;
  }
}

export default rootReducer;
