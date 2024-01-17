import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiBookmyshow } from "react-icons/si";
import { MdOutlineRateReview } from "react-icons/md";
import { FaPersonFallingBurst } from "react-icons/fa6";
import UseAdmin from "../../../Hooks/UseAdmin";



const Premium = () => {


   const [isAdmin] = UseAdmin()


    return (
        <div className=" flex space-x-7" >
            
   <div className=" w-64  bg-orange-400" >
      {/* dashboard  sidebar */}
  <ul className=" p-4 m-2" >

    {

     isAdmin ? <>
            
            <li className=" flex gap-2 items-center  font-bold" >
     <FaHome></FaHome> <NavLink to='/dashboard/adminHome' >  
     Admin Home </NavLink> </li>

  <li className=" flex gap-2 items-center font-bold" >
     <SiBookmyshow></SiBookmyshow> <NavLink to='/dashboard/allUsers' > 
     All users  </NavLink> </li>

  <li className=" flex gap-2 items-center font-bold" >
     <MdOutlineRateReview></MdOutlineRateReview> <NavLink to='/dashboard/allArticles' >
     All Articles  </NavLink> </li>


      </>
      :
      <>
      
    <li className=" flex gap-2 items-center  font-bold" >
     <FaHome></FaHome> <NavLink to='/dashboard/userHome' >  
     UserHome </NavLink> </li>

  <li className=" flex gap-2 items-center font-bold" >
     <SiBookmyshow></SiBookmyshow> <NavLink to='' > 
      My Articles  </NavLink> </li>

  <li className=" flex gap-2 items-center font-bold" >
     <MdOutlineRateReview></MdOutlineRateReview> <NavLink to='' >
          My Review </NavLink> </li>
  
      </>

    }

          <div className="divider"></div>
  
  <li className=" flex gap-2 items-center  font-bold" >
     <FaHome></FaHome> <NavLink to='/' >  
     Home </NavLink> </li>

  <li className=" flex gap-2 items-center  font-bold" >
     <FaPersonFallingBurst></FaPersonFallingBurst>
      <NavLink to='/AllArticles' >  
     All Articles </NavLink> </li>
 


  </ul>


   </div>
   {/* //  dashboard contant */}
   <div className=" flex-1" >

 <h1 className=" text-3xl font-bold text-center m-2" > Dashboard </h1>

    <Outlet></Outlet>

   </div>

        </div> 
    );
};

export default Premium;


{/* <li className=" flex gap-2 items-center  font-bold" >
<FaHome></FaHome> <NavLink to='/dashboard/adminHome' >  
Admin Home </NavLink> </li>

<li className=" flex gap-2 items-center font-bold" >
<SiBookmyshow></SiBookmyshow> <NavLink to='/dashboard/allUsers' > 
All users  </NavLink> </li>

<li className=" flex gap-2 items-center font-bold" >
<MdOutlineRateReview></MdOutlineRateReview> <NavLink to='/dashboard/allArticles' >
All Articles  </NavLink> </li> */}




