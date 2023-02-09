import axios from "axios";

import {
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
  FILTER_BY_PROFESSION,
  FILTER_BY_PROVINCE,
  FILTER_TOWN,
  DELETE_SERVICE,
  DELETE_PROFILE,
  DELETE_USER,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  GET_PROFESSIONALS_BY_PROFESSION,
  urlCategory,
  urlProfession,
  urlProfessionals,
  urlUsers,
  urlProducts,
  urlReviews,
  urlShoppingcart,
} from "../../utils";

let url = "https://hiremyskillsbackend.onrender.com";

export function getCategories() {
  return function (dispatch) {
    axios.get(urlCategory).then((response) => {
      return dispatch({
        type: GET_CATEGORIES,
        payload: response.data,
      });
    });
  };
}

export function getSubCategory() {
  return function (dispatch) {
    axios.get(urlProfession).then((response) => {
      return dispatch({
        type: GET_SUB_CATEGORY,
        payload: response.data,
      });
    });
  };
}

export function getProfessionals() {
  return async function (dispatch) {
    await axios.get(urlProfessionals).then((response) => {
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

//--------------Filter by profession------------
export function filterByProfession(name) {
  return {
    type: FILTER_BY_PROFESSION,
    payload: name,
  };
}
export function filterByProvince(town) {
  return {
    type: FILTER_BY_PROVINCE,
    payload: town,
  };
}
export function filterTown() {
  return async function (dispatch) {
    await axios.get(urlProfessionals).then((response) => {
      return dispatch({
        type: FILTER_TOWN,
        payload: response.data,
      });
    });
  };
}

//--------------Order by name------------
export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function postProfessional(data) {
  return async function (dispatch) {
    axios
      .post(urlProfessionals, data)
      .then((res) => dispatch({ type: POST_PROFESSIONALS, payload: res.data }));
  };
}

export function deleteProfessional(id) {
  return async function (dispatch) {
    axios
      .delete(`${urlProfessionals}/${id}`)
      .then((res) => dispatch({ type: DELETE_PROFILE, payload: res.data }));
  };
}

export function orderByReviews(payload) {
  return {
    type: ORDER_BY_REVIEWS,
    payload,
  };
}

// export function addToCart(service){
//     return async function(dispatch){
//         axios.post(urlShoppingcart, service)
//         .then(res=>
//             dispatch({type:ADD_TO_CART, payload: res.data}))
//     }
// }
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export function postReviews(message) {
  return async function (dispatch) {
    axios
      .post(urlReviews, message)
      .then((res) => dispatch({ type: POST_REVIEWS, payload: res.data }));
  };
}

export const deleteFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({
  type: CLEAR_CART,
});

// export function deleteFromCart(service){
//     return async function(dispatch){
//         axios.delete(`${urlShoppingcart}/${service}`)
//         .then(res=>
//         dispatch({type:DELETE_TO_CART, payload:service}))
//     }
// }
export function postService(data) {
  return async function (dispatch) {
    axios
      .post(urlProducts, data)
      .then((res) => dispatch({ type: POST_SERVICES, payload: res.data }));
  };
}
export function getUser() {
  return async function (dispatch) {
    axios
      .get(urlUsers)
      .then((res) => dispatch({ type: GET_USER, payload: res.data }));
  };
}
export function getUserById(id) {
  return async function (dispatch) {
    axios
      .get(`${urlUsers}/${id}`)
      .then((res) => dispatch({ type: GET_USER_BY_ID, payload: res.data }));
  };
}

export function postUser(data) {
  return async function (dispatch) {
    console.log(data, "esto data");
    const res = await axios.post(urlUsers, data);
    console.log(res, "res");
    return res;
  };
}
export function deleteUser(id) {
  return async function (dispatch) {
    axios
      .delete(`${urlUsers}/${id}`)
      .then((res) => dispatch({ type: DELETE_USER, payload: res.data }));
  };
}

export function getProfesionalsByProfession(profession) {
  return async function (dispatch) {
    try {
      const aux = await axios.get(`${url}/profession?profession=${profession}`);
      console.log(aux.data);

      return dispatch({
        type: GET_PROFESSIONALS_BY_PROFESSION,
        payload: aux.data,
      });
    } catch (error) {
      // return dispatch({
      //     type: GET_COUNTRY_BY_NAME,
      //     payload: error
      // })
      console.log("ERROR ", error);
    }
  };
}
export function getServices() {
  return function (dispatch) {
    axios.get(urlProducts).then((response) => {
      return dispatch({
        type: GET_SERVICES,
        payload: response.data,
      });
    });
  };
}

export function orderByRating(payload) {
  return {
    type: ORDER_BY_RATING,
    payload,
  };
}

// export const addToCart = service=>
//   async function (dispatch){
//     //if cart already exist in local storage, use it, otherwise set to empty array
//     const shoppingCart = localStorage.getItem('shoppingCart')
//       ? JSON.parse(localStorage.getItem('shoppingCart'))
//       : [];

//     //check if duplicates
//     const duplicates = shoppingCart.filter(cartService =>
//       cartService._id === service._id)

//     //if no duplicates, proceed
//     if(duplicates.length === 0){
//         //prep service data
//         const serviceToAdd ={
//           ...service,
//           quantity: 1
//         }

//         //add service data to cart
//         shoppingCart.push(serviceToAdd)

//         //add cart to local storage
//         localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))

//         //add cart to redux
//         dispatch({
//           type: ADD_TO_CART,
//           payload: shoppingCart,
//         })

//     }

//   }
