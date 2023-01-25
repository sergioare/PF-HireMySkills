import {


    PROFESSIONAL_ID,
    GET_CATEGORY_BY_NAME


} from '../actions/actions'



const initialState = {
    professionals :[],
    subCategory:[]
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case PROFESSIONAL_ID:

            return {
                ...state,
                    professionals:action.payload
            }
        
        case GET_CATEGORY_BY_NAME:

            return{
                ...state,
                subCategory:action.payload
            }
            
            
    }
}

export default rootReducer;