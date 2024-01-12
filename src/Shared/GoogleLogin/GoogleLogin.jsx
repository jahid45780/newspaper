import { AiFillGoogleSquare } from "react-icons/ai";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleSingIn} = UseAuth()
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSingIn = ()=>{
        googleSingIn()
        .then(result =>{
           console.log(result.user);
           const userInfo = {
               email: result.user?.email,
               name: result.user?.displayName
           }
           axiosPublic.post('/users', userInfo)
           .then(res =>{
               console.log(res.data);
               navigate('/')
           })
        })
   }

    return (
        <div>
             <button onClick={handleGoogleSingIn} className=" btn btn-primary flex items-center" > <AiFillGoogleSquare className=" text-2xl" ></AiFillGoogleSquare>Google</button>
        </div>
    );
};

export default GoogleLogin;