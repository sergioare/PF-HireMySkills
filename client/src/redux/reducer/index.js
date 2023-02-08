import {
  GET_CATEGORIES,
  GET_SUB_CATEGORY,
  GET_PROFESSIONALS,
  GET_ID_PROFESSIONALS,
  FILTER_BY_PROFESSION,
  GET_USER,
  GET_USER_BY_ID,
  SEARCH,
  POST_SERVICES,
  POST_CATEGORIES,
  POST_SUB_CATEGORY,
  POST_PROFESSIONALS,
  POST_USER,
  POST_REVIEWS,
  GET_REVIEWS,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  GET_PROFESSIONALS_BY_PROFESSION,
  FILTER_TOWN,
  FILTER_BY_PROVINCE,
  DELETE_SERVICE,
  DELETE_PROFILE,
  DELETE_USER,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  GET_COULD_REVIEW,
  GET_PROFESSIONAL_REVIEW,
} from "../../utils";

export const initialState = {
  categories: [],
  allProfessionals: [],
  detail: [],
  subCategory: [],
  town: [],
  user: [],
  userId: [],
  professionals: [],
  services: [],
  reviews: [],
  shoppingCart: [],
  worker: [],
  relation: "",
};

if (localStorage.getItem("shoppingCart")) {
  initialState.shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
} else {
  initialState.shoppingCart = [];
}

if (localStorage.getItem("allProfessionals")) {
  initialState.allProfessionals = JSON.parse(
    localStorage.getItem("allProfessionals")
  );
} else {
  initialState.allProfessionals = [];
}

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

    case GET_USER_BY_ID:
      // console.log(action.payload, "WW");
      let arr = [];
      let resultado = arr.push(action.payload);
      return {
        ...state,
        userId: resultado,
      };

    case ADD_TO_CART: {
      // let newService= state.services.find(service=> service.id === action.payload); // } //   shoppingCart:[...action.payload] // return{
      let newService = state.detail.products.find(
        (service) => service.id === action.payload
      );
      let serviceInCart = state.shoppingCart.find(
        (service) => service.id === newService.id
      );

      return serviceInCart
        ? {
            ...state,
            shoppingCart: state.shoppingCart.map((service) =>
              service.id === newService.id
                ? { ...service, quantity: service.quantity + 1 }
                : service
            ),
          }
        : {
            ...state,
            shoppingCart: [
              ...state.shoppingCart,
              { ...newService, quantity: 1 },
            ],
          };
    }

    case REMOVE_ONE_FROM_CART: {
      let serviceToDelete = state.shoppingCart.find(
        (service) => service.id === action.payload
      );

      return serviceToDelete > 1
        ? {
            ...state,
            shoppingCart: state.shoppingCart.map((service) =>
              service.id === action.payload
                ? { ...service, quantity: service.quantity - 1 }
                : service
            ),
          }
        : {
            ...state,
            shoppingCart: state.shoppingCart.filter(
              (service) => service.id !== action.payload
            ),
          };
    }
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (service) => service.id !== action.payload
        ),
      };

    case CLEAR_CART:
      return {
        ...initialState,
      };

    case GET_PROFESSIONALS_BY_PROFESSION:
      return {
        ...state,
        worker: action.payload,
      };

    //--------------Review------------
    // case POST_REVIEWS:
    //   return {
    //     ...state,
    //     reviews: action.payload,
    //   };

    case GET_REVIEWS:
      // console.log(action.payload, "WW");
      return {
        ...state,
        reviews: action.payload,
      };

    case GET_PROFESSIONAL_REVIEW:
      // console.log(action.payload, "WW");
      return {
        ...state,
        reviews: action.payload,
      };

    case GET_COULD_REVIEW:
      // console.log(action.payload, "WW");
      return {
        ...state,
        relation: action.payload,
      };
    //--------------Filter by profession------------
    case FILTER_BY_PROFESSION:
      let array = [];
      state.professionals.map((pf) =>
        pf.skills.forEach((el) => {
          if (el === action.payload) array.push(pf);
        })
      );
      if (action.payload === "All") {
        array = state.professionals;
      }
      return {
        ...state,
        allProfessionals: array,
      };

    case FILTER_TOWN:
      let townf = [];
      for (let i = 0; i < action.payload.length; i++) {
        action.payload.map((f) => {
          const all = townf.includes(action.payload[i].town);
          if (all === false) {
            townf.push(action.payload[i].town);
          }
        });
      }
      return { ...state, town: townf };

    case FILTER_BY_PROVINCE:
      let city = [];
      console.log(state.professionals, "city");
      if (action.payload === "All") {
        city = state.professionals;
      }
      if (!city.length) {
        city = state.professionals.filter(
          (pf) => pf.town.toLowerCase() === action.payload.toLowerCase()
        );
      }
      return { ...state, allProfessionals: city };

    case ORDER_BY_NAME:
      let arra;
      if (action.payload === "select") {
        arra = state.professionals;
      }
      if (action.payload === "asc") {
        arra = state.allProfessionals.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          else return -1;
        });
      }
      if (action.payload === "desc") {
        arra = state.allProfessionals.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          else return 1;
        });
      }
      if (action.payload === "max") {
        arra = state.allProfessionals.sort((a, b) => {
          if (parseFloat(a.rating) < parseFloat(b.rating)) return 1;
          else return -1;
        });
      }
      if (action.payload === "min") {
        arra = state.allProfessionals.sort((a, b) => {
          if (parseFloat(a.rating) > parseFloat(b.rating)) return 1;
          else return -1;
        });
      }
      return {
        ...state,
        allProfessionals: arra,
      };

    default:
      return state;
  }
}

export default rootReducer;
