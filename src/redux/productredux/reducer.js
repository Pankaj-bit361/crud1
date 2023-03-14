import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actiontypes"

const initstate={
    isLoading:false,
    isError:false,
    products:[]
}
export const reducer=(state=initstate,{type,payload})=>{

switch(type){
    case POST_PRODUCT_REQUEST:{
        return {
        ...state,isLoading:true}
    }
    case POST_PRODUCT_SUCCESS:{
        return {
            ...state,isLoading:false
        }
    }
    case POST_PRODUCT_FAILURE:{
        return {
            ...state,isLoading:false,isError:false
        }
    }
    default:{
        return state
    }
}

}