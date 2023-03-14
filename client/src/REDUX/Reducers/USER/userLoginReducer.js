import { ActionTypes } from "../../Constants/User/ActionTypes";

export const userLoginReducer =  (state = {} , {type,payload}) => {
    switch(type){
        case ActionTypes.LOGIN_REQUEST :
            return {
              loading : true
            }

        case ActionTypes.LOGIN_REQUEST_SUCCESS :
            console.log("userLogiReducerData",payload); 
        return {
            loading : false,
            userLoginDetails : payload
        }  
        
        case ActionTypes.LOGIN_REQUEST_FAILED :
            return {
                loading : true,
                userLoginError : payload
            }
        case ActionTypes.LOGOUT_REQUEST :
            return {}

        default : return state    
    }
}