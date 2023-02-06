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
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  GET_PROFESSIONALS_BY_PROFESSION,
  FILTER_TOWN,
  ORDER_BY_REVIEWS,
  FILTER_BY_PROVINCE,
  DELETE_SERVICE,
  DELETE_PROFILE,
  DELETE_USER,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from "../../utils";

export const initialState = {
  categories: [],
  allProfessionals: [],
  detail: [],
  subCategory: [],
  town: [],
  user:[],
  professionals:[],
  services:[],
  reviews:[],
  shoppingCart:[],
  worker:[],
};

if(localStorage.getItem('shoppingCart')){
  initialState.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
} else{
  initialState.shoppingCart = [];
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


     
    case ADD_TO_CART:
      // return{
      //   shoppingCart:[...action.payload]
      // }
      // let newService= state.services.find(service=> service.id === action.payload);
      {
          let newService= state.detail.products.find(service=> service.id === action.payload);
          let serviceInCart = state.shoppingCart.find(service=>service.id === newService.id)
          
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
                ?{...service, quantity: service.quantity - 1}
                : service),
          }
          : {

            ...state,
            shoppingCart: state.shoppingCart.filter(
              (service) => service.id !== action.payload
            ),
          };
    }

    case REMOVE_ALL_FROM_CART:

      return{
        ...state,
        shoppingCart: state.shoppingCart.filter(service=>
          service.id !== action.payload)
      }

    case CLEAR_CART:
      return{
        ...initialState,
        
      }


    case GET_PROFESSIONALS_BY_PROFESSION:
      return {
        ...state,
        worker: action.payload,
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
  // let arra =[]
  // console.log(action.payload[0].town, "PF");
  for (let i = 0; i < action.payload.length; i++) {
    action.payload.map((f) => {
      const all = townf.includes(action.payload[i].town);
      // console.log(typeof all, all);
      if (all === false) {
        townf.push(action.payload[i].town);
      }
      // return townf;
    });
  }
  // console.log(townf, "Z");
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

  // for (let i = 0; i < state.professionals.length; i++) {
  //   if (action.payload !== state.professionals[i].town)
  //     city.push(action.payload);
  // }

  return { ...state, allProfessionals: city };

    case ORDER_BY_NAME:
      let arra;
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
    // let orderAsc = state.professionals.slice().sort((a, b) => {
    //   let professionalsA = a.name.toLowerCase();
    //   let professionalsB = b.name.toLowerCase();

    //   if (professionalsA > professionalsB) return 1;

    //   if (professionalsB > professionalsA) return -1;

    //   return 0;
    // });

    // const allProfessionalsProf = state.allProfessionals;
    // const orderName =
    //   action.payload === "asc" ? orderAsc : orderAsc.reverse();

    // return {
    //   ...state,
    //   professionals: action.payload === "" ? allProfessionalsProf : orderName,
    // };

    case ORDER_BY_RATING:
      let orderRatingAsc = state.professionals.slice().sort((a, b) => {
        if (Number(a.rating) > Number(b.rating)) return 1;

        if (Number(b.rating) > Number(a.rating)) return -1;

        return 0;
      });

      return {
        ...state,
        professionals:
          action.payload === "asc" ? orderRatingAsc : orderRatingAsc.reverse(),
      };

    default:
      return state;
  }
}

export default rootReducer;
