import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {


    const navLink = <>
   
          <li> <Link> Home </Link> </li>
          <li> <Link to='/addArticles' > Add Articles </Link> </li>
          <li> <Link to='/AllArticles' > All Articles </Link> </li>
          <li> <Link> My Articles </Link> </li>
          <li> <Link> Subscription </Link> </li>
           <li> <Link to='/dashboard' > Dashboard </Link> </li>
          <li> <Link> Premium Articles </Link> </li>
          
   </>

const {user, logOut} = useContext(AuthContext)

const handleSingOut = () => {
  logOut()
    .then(result => {
      console.log(result)
      Swal.fire('LogOut Successfully')
    })
 
    .catch()
 
 }

    return (
        <div>

<div className="navbar z-10 bg-opacity-20  bg-black text-white rounded-3xl  ">
  <div className="navbar-start">
    <div className="dropdown text-black">
      <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       

        {navLink}


      </ul>
    </div>
    <img className=" w-40 rounded-lg" src="https://i.ibb.co/GVdYgPL/406969428-815832850312796-3587584866340816699-n.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-slate-100 text-[17px] px-1">
   
        
        {navLink}

    </ul>
  </div>
  <div className="navbar-end">
      
  {
           user ? (<div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className=" w-14 border-4 border-red-500 rounded-full">
                    <img className=" w-full h-full " src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm bg-green-400 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-60">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span> <img className=" w-7 h-7 rounded-full" src={user?.photoURL} alt="" /> </span>
                    </a>
                    <p className=" text-xl p-3 " > {user?.displayName} </p>
                    <p className=" -ml-2  p-3 " > {user?.email} </p>
                   
                  </li>
                  <button onClick={ handleSingOut} className=" btn btn-secondary mr-4 " > Sign Out </button>
             
                </ul>
              </div>)
               : (<Link to='/login' > <button className=" btn btn-secondary mr-4 " > Login </button> </Link>)
                   
            }




  </div>
</div>
            
        </div>
    );
};

export default Navbar;