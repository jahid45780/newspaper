import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleSquare } from "react-icons/ai";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
 
  // show password
  const [showPassword, setShowPassword] = useState(false)
  // forget password

  const emailRef = useRef(null)

  // const Navigate = useNavigate()
  // const Location = useLocation()

  // const form = location.state?.from?.pathname || "/"
  
  const {signIn} = useContext(AuthContext)
  const auth = getAuth(app)

  const provider = new GoogleAuthProvider() 
     const location = useLocation()
     const navigate  = useNavigate()
     // googleLogin
  const handleGoogleSignIn = ()=>{
       
    signInWithPopup(auth, provider)

    .then(result=>{
      const user = result.user
      console.log(user)
      navigate(location?.state? location?. state : '/')
    })

    .catch(error=>{
      console.error(error)
    })
   } 

   // login
   const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
   
    signIn(email,password)
    .then(result =>{
      const loggedInUser = result.user
      console.log(loggedInUser);
      Swal.fire('Login Successfully')
      navigate(location?.state? location?. state : '/')
    })
    .catch(error=>{
      console.log(error);
      Swal.fire('Incorrect password Try again')
    })

    // navigate( form, {replace: true})

}

// forget password

const handleForgetPassword = () =>{
  const email = emailRef.current.value;
  if(!email){
    console.log('please provide an email', emailRef.current.value);
    return;

  }
 
  else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
  {
      // console.log('please right valid email')
     Swal.fire(' please right valid email ') 
     return;

  }

  // sent validation email
  sendPasswordResetEmail( auth, email)

  .then( ()=>{
    Swal.fire(' please check your email ')
    return;
  })
  .catch(error =>{
      console.log(error);
  })

}


    return (
        <div>
            
            <div className="hero min-h-screen  rounded-lg ">
  <div className="hero-content flex-col mt-32 lg:flex-row">
    <div className=" w-1/2 mr-14 ">
    
       <img src="../../../public/Featured/login-animate.gif" alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body  ">
      <h1 className="text-3xl text-center font-bold">Login </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
           placeholder="email" 
           name="email"
           ref={emailRef} 
           className="input input-bordered" 
           required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type= {  showPassword ? "text" : "password"}
          placeholder="password" name="password" 
          className="input  input-bordered" required />
            <span className=" relative -mt-10 ml-72 text-3xl" onClick={() => setShowPassword(!showPassword) } > 
            
             {
              showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
             }
            
             </span>
          <label className="label mt-6">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
           <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <div className=" text-center" >
        <h1> Or Sign In with </h1>
         <p className=" flex items-center justify-center gap-2 text-2xl mt-3 p-3" >
         <button onClick={handleGoogleSignIn} className=" btn btn-primary flex items-center" > <AiFillGoogleSquare className=" text-2xl" ></AiFillGoogleSquare>Google</button>
          

         </p>
      </div>
      <div>
        <h1 className=" p-5 ml-9 text-center " >Have an account? <Link to='/signUp' className=" text-xl text-[#FF3811]" >  SignUp </Link> </h1>
      </div>


    </div>
  </div>
</div>

        </div>
    );
};

export default Login;