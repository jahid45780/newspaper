

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

     <div className=" bg-green-600 w-full h-80 mt-14" >

        <div className=" bg-slate-200 w-10/12 h-52 mx-auto " >
             hhhhhhhh
        </div>

     </div>
       

        </div>
    );
};

export default Contacts;