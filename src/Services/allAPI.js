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

// Home Project
export const homeProjectAPI = async() => {
    return await commonAPI("GET", `${base_url}/projects/home-projects`, "", "")
}

// All project API
export const allProjectAPI = async(searchKey, reqHeader) => {
    return await commonAPI("GET", `${base_url}/project/all?search=${searchKey}`, "", reqHeader)
}

// User project
export const userProjectAPI = async(reqHeader) => {
    return await commonAPI("GET", `${base_url}/user/all-projects`, "", reqHeader)
}