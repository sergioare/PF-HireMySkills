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
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART

} from "../../utils";

export const initialState = {
  categories: [],
  profession: [],
  allProfessionals: [],
  detail: [],
  subCategory: [],
  user:[],
  professionals:[],
  services:[
    {id: 1, name: 'service 1', price: 100},
    {id: 2, name: 'service 2', price: 200},
    {id: 3, name: 'service 3', price: 300},
    {id: 4, name: 'service 4', price: 400},
    {id: 5, name: 'service 5', price: 500},
  ],
  reviews:[],
  shoppingCart:[],
  worker:[],

};

export function rootReducer(state = initialState, action) {
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

    
    case ADD_TO_CART:
        {
          let newService= state.services.find(service=> service.id === action.payload);
          let serviceInCart = state.shoppingCart.find(service=>service.id === newService.id)
          
          return serviceInCart
          
          ? {
            ...state,
            shoppingCart: state.shoppingCart.map(service=> 
              service.id === newService.id
                ?{...service, quantity: service.quantity +1}
                :service)
                
          } 
          
          :{
            ...state,
            shoppingCart:[...state.shoppingCart, {...newService,quantity: 1}]
          }
       
      }

    case REMOVE_ONE_FROM_CART:
      {
        let serviceToDelete = state.shoppingCart.find(service=> service.id === action.payload)
        
        return serviceToDelete > 1
          ?{...state,
            shoppingCart: state.shoppingCart.map(service=>
              service.id === action.payload
                ?{...service, quantity: service.quantity -1}
                : service)
          }
          :{
            ...state,
            shoppingCart:state.shoppingCart.filter(service=>
              service.id !== action.payload)
          }
      }

    case REMOVE_ALL_FROM_CART:
      return{}

    case CLEAR_CART:
      return{
        ...state,
        shoppingCart:[],
      }

      case GET_PROFESSIONALS_BY_PROFESSION:
       
      return {
        ...state,
        worker: action.payload,
       

      };


    default:
      return state;
  }
}

export default rootReducer;
