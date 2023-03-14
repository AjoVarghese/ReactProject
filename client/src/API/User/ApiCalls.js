import axios from "axios"

const API = axios.create({baseURL : "http://localhost:3001"})

const config = {
    headers : {
      "Content-Type" : "application/json"
    }
}

export const userSignupApi = (Name,Email,Mobile,Password) => API.post('user/signup',{Name,Email,Mobile,Password},config)
export const userLoginAPi = (Mobile,Password) => API.post('user/login',{Mobile,Password},config)
export const userHomeApi = () => API.get('user/',config)