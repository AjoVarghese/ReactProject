import { ActionTypes } from "../../Constants/User/ActionTypes"

export const userLogoutAction = () =>async(dispatch) => {
    try {
        dispatch({
            type : ActionTypes.LOGOUT_REQUEST
        })
    } catch (error) {
        
    }
}