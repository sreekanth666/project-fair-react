import { base_url } from "./baseurl";
import { commonAPI } from "./commonAPI";

// Register user
export const registerAPI = async(user) => {
    return await commonAPI("POST", `${base_url}/user/register`, user,"")
}

// Login user
export const loginAPI = async(user) => {
    return await commonAPI("POST", `${base_url}/user/login`, user, "")
}

// Add project
export const addProjectApi = async(reqBody, reqHeader) => {
    return await commonAPI("POST",`${base_url}/project/add`, reqBody, reqHeader)
}