import axios from 'axios'
import{
    GET_CATEGORIES,
    GET_SUB_CATEGORY,
    GET_PROFESSIONALS,
    GET_SERVICES,
    SEARCH,
    POST_SERVICES,
    POST_CATEGORIES,
    POST_SUB_CATEGORY,
    POST_PROFESSIONALS,
    POST_REVIEWS,
    ORDER_BY_RATING,
    ORDER_BY_NAME,
    ORDER_BY_REVIEWS,
    FILTER_BY_PROVINCE,
    DELETE_SERVICE,
    DELETE_PROFILE,
    urlCategory,
    urlProfession,
    urlProfessionals,
    urlUsers,
    urlProducts,
    urlReviews
} from '../../utils'
import api from '../../api.json'

export function getCategories(){
    return async function (dispatch){
        axios.get
    }
}

export function getProfessionals(){
    return async function(dispatch){
        axios.get(urlProfessionals)
        .then(res=>
            dispatch({type:GET_PROFESSIONALS, payload:res.data}))
    }
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

export function postReviews(message){
    return async function(dispatch){
        axios.post(urlReviews, message)
        .then(res=>
            dispatch({type:POST_REVIEWS, payload:res.data}))
    }
}