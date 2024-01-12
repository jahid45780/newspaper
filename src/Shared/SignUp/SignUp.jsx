import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const SignUp = () => {
   const axiosPublic = UseAxiosPublic();
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
     console.log(data);
     createUser(data.email, data.password)
     .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(()=>{
            // create user entry in the database
            const userInfo = {
               name: data.name,
               email:data.email,
               photo:data.photoURL
            }
            axiosPublic.post('/users', userInfo )
            .then(res=>{
               if(res.data.insertedId){
                reset()
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "SignUp SuccessFull User",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
               }
            })

            reset()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "SignUp SuccessFull User",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
        })
        .catch(error => console.log(error))
     })
  };
 
  return (
    <div>

<div className="hero min-h-screen ">
  <div className="hero-content flex-col mt-32 lg:flex-row">
    <div className=" w-1/2 mr-14 ">
    
    <img  className=" w-full h-full " src="https://i.ibb.co/grgsy06/liz-gross-signup.gif" alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
      <h1 className="text-3xl text-center font-bold"> Sign Up </h1>

      <div className="form-control">
            
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input {...register ('name',{ required: true })} type="text" placeholder=" your Name" name="name" className="input input-bordered" />
            {errors.name && <span className=' text-red-600' >Name field is required</span>}
          </div>
     
      <div className="form-control">
            
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input {...register ('photo',{ required: true }) } type="text" placeholder="photo url " name="photo" className="input input-bordered" />
            {errors.photoUrl && <span className=' text-red-600' > PhotoUrl field is required</span>}
          </div>

        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register ('email',{ required: true }) } type="email" placeholder=" your email" name="email" className="input input-bordered"/>
          {errors.name && <span className=' text-red-600' >email field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Confirm Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password",{ required: true, minLength: 6, maxLength:20,pattern: /[A-Za-z]/i })} name="password" className="input input-bordered" />
                                {errors.password?. type === 'minLength'  &&  <p className=' text-red-700' > Password must be 6 characters </p>}
                                {errors.password?. type === 'maxLength'  &&  <p className=' text-red-700' > Password must be less then 20 characters </p>}
                                {errors.password?. type === 'pattern'  &&  <p className=' text-red-700' > Password must be uppercase  characters </p>}
    
        </div>
        <div className="form-control mt-6">
         
           <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
          <p className=" text-center" >
          Or Sign In with
          </p>
        <div className=" flex items-center justify-center" >
        <GoogleLogin></GoogleLogin>
        </div>
      </form>
      
      <div>
        <h1 className=" p-5 ml-9 " >Already have an account?<Link to='/logIn' className=" text-xl text-[#FF3811]" > LogIn </Link> </h1>
      </div>


    </div>
    
  </div>
</div>

    </div>
  );
};

export default SignUp;