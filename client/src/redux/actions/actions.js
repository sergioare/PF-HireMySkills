
import axios from 'axios'
import{
    GET_CATEGORIES,
    GET_SUB_CATEGORY,
    GET_PROFESSIONALS,
    GET_SERVICES,
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
    GET_ID_PROFESSIONALS,
    FILTER_BY_PROVINCE,
    DELETE_SERVICE,
    DELETE_PROFILE,
    DELETE_USER,
    ADD_TO_CART,
    REMOVE_ONE_FROM_CART,
    REMOVE_ALL_FROM_CART,
    CLEAR_CART,
    DELETE_TO_CART,
    GET_PROFESSIONALS_BY_PROFESSION,
    urlCategory,
    urlProfession,
    urlProfessionals,
    urlUsers,
    urlProducts,
    urlReviews,
    urlShoppingcart
} from '../../utils'
import api from '../../api.json'
let url = "https://hiremyskillsbackend.onrender.com";

export function getCategories() {
    return function (dispatch) {
      axios.get(`${url}/category`).then((response) => {
        return dispatch({
          type: GET_CATEGORIES,
          payload: response.data,
        });
      });
    };
  }
  
  export function getSubCategory() {
    return function (dispatch) {
      axios.get(`${url}/profession`).then((response) => {
        return dispatch({
          type: GET_SUB_CATEGORY,
          payload: response.data,
        });
      });
    };
  }
  
  export function getProfessionals() {
    return function (dispatch) {
      axios.get(`${url}/professionals`).then((response) => {
        return dispatch({
          type: GET_PROFESSIONALS,
          payload: response.data,
        });
      });
    };
  }
  export function getProfessionalById(id) {
    return function (dispatch) {
      axios.get(`${url}/professionals/${id}`).then((response) => {
        return dispatch({
          type: GET_ID_PROFESSIONALS,
          payload: response.data,
        });
      });
    };
  }
  export function clearProfessional() {
    return function (dispatch) {
      return dispatch({
        type: GET_ID_PROFESSIONALS,
        payload: [],
      });
    };
  }

export function postProfessional(data){
    return async function(dispatch){
        axios.post(urlProfessionals, data)
        .then(res=>
            dispatch({type:POST_PROFESSIONALS, payload:res.data}))
    }
}



export function deleteProfessional(id){
    return async function(dispatch){
        axios.delete(`${urlProfessionals}/${id}`)
        .then(res=>
            dispatch({type:DELETE_PROFILE, payload: res.data}))
    }
}
export function orderByRating(payload){
    return {
        type: ORDER_BY_RATING,
        payload,
    }
}

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}
export function orderByReviews(payload){
    return {
        type: ORDER_BY_REVIEWS,
        payload,
    }
}


export function postReviews(message){
    return async function(dispatch){
        axios.post(urlReviews, message)
        .then(res=>
            dispatch({type:POST_REVIEWS, payload:res.data}))
    }
}

export function addToCart(service){
    return async function(dispatch){
        axios.post(urlShoppingcart, service)
        .then(res=>
            dispatch({type:ADD_TO_CART, payload: res.data}))
    }
}

// export function deleteToCart(service){
//     return async function(dispatch){
//         axios.delete(`${urlShoppingcart}/${service}`)
//         .then(res=>
//         dispatch({type:DELETE_TO_CART, payload:service}))
//     }
// }
export function postService(data){
    return async function(dispatch){
        axios.post(urlProducts, data)
        .then(res=>
            dispatch({type:POST_SERVICES, payload:res.data}))
    }
}
export function getUser(){
    return async function(dispatch){
        axios.get(urlUsers)
        .then(res=>
            dispatch({type:GET_USER, payload:res.data}))
    }
}
export function getUserById(id){
    return async function(dispatch){
        axios.get(`${urlUsers}/${id}`)
        .then(res=>
            dispatch({type:GET_USER_BY_ID, payload:res.data}))
    }
}

export function postUser(data){
    return async function(dispatch){
        axios.post(urlUsers, data)
        .then(res=>
            dispatch({type:POST_USER, payload:res.data}))
    }
}
export function deleteUser(id){
    return async function(dispatch){
        axios.delete(`${urlUsers}/${id}`)
        .then(res=>
            dispatch({type:DELETE_USER, payload: res.data}))
    }
}

export function getProfesionalsByProfession(profession){
  return async function (dispatch){
      try {
          const aux = await axios.get(`${url}/profession?profession=${profession}`)
          console.log(aux.data)

          return dispatch({
              type: GET_PROFESSIONALS_BY_PROFESSION,
              payload: aux.data
          })
      } catch (error) {
          // return dispatch({
          //     type: GET_COUNTRY_BY_NAME,
          //     payload: error
          // })
          console.log("ERROR ", error)
      }
  }}


