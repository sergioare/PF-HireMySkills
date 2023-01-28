import axios from "axios";
//ACTIONS TYPES
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUB_CATEGORY = "GET_SUB_CATEGORY";
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";
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

//URLS API

export const urlCategory = "http://localhost:4000/category";
export const urlProfession = "http://localhost:4000/profession";
export const urlProfessionals = "http://localhost:4000/professionals";
export const urlUsers = "http://localhost:4000/users";
export const urlProducts = "http://localhost:4000/products";

let url = "https://hiremyskillsbackend.onrender.com";

export function getCategories() {
  return function (dispatch) {
    axios.get(`${url}/category`).then((response) => {
      return dispatch({
        type: "GET_CATEGORIES",
        payload: response.data,
      });
    });
  };
}
