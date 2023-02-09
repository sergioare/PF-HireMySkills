import axios from "axios";
import Swal from 'sweetalert2'
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
  GET_REVIEWS,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
  ORDER_BY_REVIEWS,
  GET_ID_PROFESSIONALS,
  FILTER_BY_PROFESSION,
  FILTER_BY_PROVINCE,
  FILTER_TOWN,
  FILTER_BY_STATE,
  FILTER_BY_COUNTRY,
  DELETE_SERVICE,
  DELETE_PROFILE,
  DELETE_USER,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  GET_PROFESSIONALS_BY_PROFESSION,
  GET_COULD_REVIEW,
  GET_PROFESSIONAL_REVIEW,
  urlCategory,
  urlProfession,
  urlProfessionals,
  urlUsers,
  urlProducts,
  urlReviews,
  urlShoppingcart,
  PATCH_USERS,
  PATCH_PROFESSIONALS,
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
  console.log("DELTED ACTION", id)
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

export function addToCart(services, userTokken){
  const showAlert = ()=>{
    Swal.fire({
    title: "Your service was added to cart successfuly",
    icon: "success",
    footer: "<b>Continue enjoy our services</b>"
})
}
  const item = [services, userTokken]
    return async function(dispatch){
        axios.post(urlShoppingcart, item)
        .then(res=>
            dispatch({type:ADD_TO_CART, payload: services}))
            showAlert()
    }
}
// export const addToCart = (id) => ({
//   type: ADD_TO_CART,
//   payload: id,
// });


export function patchUser (user, id){
  console.log("USERPATCH   ", user  )
  return async function (dispatch){
    axios 
      .patch(`${urlUsers}/${id}`, user)
      .then((res)=>console.log("actionRES ", res.data))
      .then((res)=> dispatch({type: PATCH_USERS, payload: res.data}))
  }
}

export function patchProfessionals(profesional, id){
  console.log("USERPATCH   ", profesional  )

  return async function (dispatch){
    axios
      .patch(`${urlProfessionals}/${id}`,profesional)
      .then((res)=>console.log("PROFESIONAL patch", res.data))
      .then((res)=>dispatch({type:PATCH_PROFESSIONALS, payload:res.data}))
  }
}


export function postReviews(input) {
  return async function (dispatch) {
    await axios
      .post(urlReviews, input)
      .then((res) => console.log(res.data, "res"))
      .then((res) => dispatch({ type: POST_REVIEWS, payload: res.data }));
  };
}
export function getReviews() {
  return async function (dispatch) {
    await axios
      .get(urlReviews)
      .then((res) => dispatch({ type: GET_REVIEWS, payload: res.data }));
  };
}

export function getCouldReview(professionalId, userId) {
  // console.log(professionalId, userId, "idData");
  return async function (dispatch) {
    await axios
      .get(`${urlReviews}/${professionalId}/${userId}`)
      // .then((res) => console.log(res.data, "data"))
      .then((res) =>
        dispatch({
          type: GET_COULD_REVIEW,
          payload: res.data,
        })
      );
  };
}

export function getProfessionalReview(professionalId) {
  console.log(professionalId, "idprof");
  return async function (dispatch) {
    await axios.get(`${urlReviews}/${professionalId}`).then((res) =>
      dispatch({
        type: GET_PROFESSIONAL_REVIEW,
        payload: res.data,
      })
    );
  };
}

export const deleteFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({
  type: CLEAR_CART,
});

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
  // console.log(id);
  return async function (dispatch) {
    axios
      .get(`${urlUsers}/${id}`)
      .then((res) => console.log(res.data, "data"))
      .then((res) => dispatch({ type: GET_USER_BY_ID, payload: res.data }));
  };
}

export function postUser(data) {
  return async function (dispatch) {
    const res = await axios.post(urlUsers, data);
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
      // console.log(aux.data);

      return dispatch({
        type: GET_PROFESSIONALS_BY_PROFESSION,
        payload: aux.data,
      });
    } catch (error) {
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
