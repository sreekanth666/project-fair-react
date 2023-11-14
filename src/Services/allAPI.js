import { base_url } from "./baseurl";
import { commonAPI } from "./commonAPI";

export const registerAPI = async(user) => {
    return await commonAPI("POST", `${base_url}/user/register`, user,"")
}