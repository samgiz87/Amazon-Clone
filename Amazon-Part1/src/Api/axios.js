import axios from "axios";
 const axiosInstance = axios.create ({
   // deploy version of Firebase Function
    // baseURL:"https://api-j62kbgz23a-uc.a.run.app",

   //  deploy version of render version 
    baseURL:"https://amazon-api-deploy-jlv8.onrender.com"
 })

 export {axiosInstance}