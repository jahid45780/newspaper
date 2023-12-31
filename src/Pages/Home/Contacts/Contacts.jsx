import { AiFillDingtalkCircle, AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
const Contacts = () => {
    return (
        <div>
          
          <div className="  max-w-4xl mx-auto " >
            <section className=' mt-4 text-center' >
            <h1 className=' text-5xl text-orange-500 ' > -----  Contact Us ----- </h1>
            <p className=' text-4xl text-orange-700 ' > ----- Call As Needed  ----- </p>
        </section>
               
        <h1 className=" text-6xl text-center font-extrabold mt-5" > Now Contact Us </h1>
             <p className=" text-4xl text-center font-bold mt-2" > Any questions or remarks? Just write us a message! </p>

             <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 " >
             <div className="form-control">
          <label className="label">
            <span className="label-text  text-xl">Email</span>
          </label>
          <input type="email" placeholder=" Enter Your Vaild Email address" className=" p-3 border-4 rounded-full  border-red-200 bg-slate-100" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text  text-xl ">Name</span>
          </label>
          <input type="email" placeholder=" Enter Your Name" className="p-3 border-4 rounded-full  border-red-200 bg-slate-100" required />
        </div>
             </div>
             <button className="btn btn-block rounded-full uppercase mt-3 text-2xl p-2 "> Submit </button>

        </div>

     <div className=" shadow-lg lg:w-full lg:h-80 mt-14" >

        <div className=" bg-slate-200  lg:w-10/12  lg:h-52  lg:mx-auto " >
             
    <section className=" grid grid-cols-1 lg:grid-cols-3 p-3" >

   <div> 

   <AiFillDingtalkCircle className=" text-7xl " ></AiFillDingtalkCircle>

  <h1 className=" text-4xl font-bold" > Lets Talk </h1>
   
   <p className=" mt-4" > Please contact below address </p>

   </div>

   <div>

 <AiFillPhone className=" text-7xl" ></AiFillPhone>

 <h1 className=" text-4xl font-bold" > Phone (Landline) </h1>

<p> +0954467984 </p>
<p> +095408954 </p>

 <h1></h1>

   </div>

   <div>

 <FaLocationDot className=" text-7xl" ></FaLocationDot>
 <h1 className=" text-4xl font-bold" > Our Office Location </h1>
  
  <p> The News Company Prothom Alo  </p>

  <small> Dhaka Gulshan 1 No. 12 Road No. 16 House No. 3 Floor Lift </small>

   </div>


    </section>

        </div>

     </div>
       

        </div>
    );
};

export default Contacts;