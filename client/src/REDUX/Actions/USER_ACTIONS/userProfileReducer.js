import { ActionTypes } from "../../Constants/User/ActionTypes"

export const getUserProfileReducer = () => async(dispatch) => {
    try {
        dispatch({
            type : ActionTypes.GET_PROFILE_REQUEST
        })
   let user = JSON.parse(localStorage.getItem('userInfo'))
   console.log("REDCUER USER TOKEN",user);
        const config = {
            headers : {
             "Content/Type" : "application/json",
             Authorization:"Bearer"+' '+user.data.token
            }
        }
    } catch (error) {
        
    }
}