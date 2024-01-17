import axios from "axios";

const axiosPublic = axios.create({
    baseURL:"https://newspaper-server-site-mu.vercel.app"
})
const UseAxiosPublic = () => {

   return axiosPublic
    
}; 


export default UseAxiosPublic;