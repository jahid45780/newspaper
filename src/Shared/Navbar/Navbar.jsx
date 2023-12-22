import { Link } from "react-router-dom";


const Navbar = () => {


    const navLink = <>
   
          <li> <Link> Home </Link> </li>
          <li> <Link> Add Articles </Link> </li>
          <li> <Link> All Articles </Link> </li>
          <li> <Link> My Articles </Link> </li>
          <li> <Link> Subscription </Link> </li>
           <li> <Link> Dashboard </Link> </li>
          <li> <Link> Premium Articles </Link> </li>
          
   </>

    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       

        {navLink}


      </ul>
    </div>
    <img className=" w-40 rounded-lg" src="https://i.ibb.co/GVdYgPL/406969428-815832850312796-3587584866340816699-n.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   
        
        {navLink}

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;