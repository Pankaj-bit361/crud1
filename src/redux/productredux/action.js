
import axios from "axios"
import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actiontypes"

export const postrequest=()=>{
    return {type:POST_PRODUCT_REQUEST}
}

export const postsuccess=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}
export const postfailure=()=>{
    return {type:POST_PRODUCT_FAILURE}
}


export const addproducts=(products)=>(dispatch)=>{
    dispatch(postrequest())
    axios.post(`http://localhost:8080/products`,products)
    .then((res)=>{
        dispatch(postsuccess())
    })
    .catch(()=>{
        dispatch(postfailure())
    })
}