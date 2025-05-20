import axios from "axios";
import {apiUrl} from "../config";
const instance=axios.create({
    baseURL: apiUrl,
    timeout:5000
})
// REquest Interceptor
//Interceptors Axios ka ek feature hai jo requests aur responses ko modify karne ke liye use hota hai. 
// Ye middleware ki tarah kaam karta hai, jo har request aur response se pehle aur baad me execute hota hai.

instance.interceptors.request.use(

//config ek configuration object hota hai jo Axios request ki sari details store karta hai.
// isme headers, url,method(getComputedStyle,postMessage,etc), request Request Body, timeout,aur bahut kuch hota hai    
    async(config)=>{
        try{
            const accessToken= localStorage.getItem("accessToken");
//Jab API authentication ke liye Bearer Token ka use karti hai
            config.headers.Authorization=`Bearer ${accessToken}`;
            return config;
        } catch(error){
           console.error("Request Error:",error);
        }
    }
)

instance.interceptors.response.use(
    (response)=>{
        console.log("Response data:",response.data);
        return response;
    },
    (error)=>{
        console.error("Response data:",error);
        if(error.response.status ==401){
            console.log("Unauthorized error. Redirecting to login... ")
        }
    }
);
export default instance;