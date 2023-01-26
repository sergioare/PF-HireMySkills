import axios from 'axios';

import professional from '../../components/searchbar/professional.json'

export const PROFESSIONAL_ID= 'PROFESSIONAL ID';
export const GET_CATEGORY_BY_NAME ='GET_CATEGORY_BY_NAME';




export const ProfessionalId= (data)=>{
 return { type: PROFESSIONAL_ID, payload: data}
}


export const GetCategoryByName= ()=>{
    return async function(dispatch){
        
        axios.get(professional)
        .then(res=>
         dispatch({type:GET_CATEGORY_BY_NAME, payload: res.data})
          )
          
    }
}