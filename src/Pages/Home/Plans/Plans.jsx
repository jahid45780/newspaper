const Plans = () => {
    return (
        <div>

<div>
        
            <h1 className=" text-5xl font-bold text-center mt-3" > Plans </h1>

            <p className=" text-3xl font-semibold text-center mt-2 text-yellow-500" > ---- Plans Use Anything --- </p>

          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3  " >

            <div className=" space-y-3 border-4  border-red-400 p-5 " >
            <img className=" w-60 h-60 mx-auto " src="https://i.ibb.co/nD6DkxR/14979076-SL-051421-43010-01.jpg" alt="" />

          <h1 className=" text-4xl font-bold bg-green-500 p-3 " > Free For 1 Month </h1>
         <section className=" flex gap-3" >
            <p className=" text-3xl" > Premium Individual </p>
            <h1 className=" text-2xl" > free <br /> <span> For 1 Month </span> </h1>
         </section>

         <li className=" text-xl"> 1 Premium Account </li>
         <li className=" text-xl"> Cancel AnyTime </li>
         <li className=" text-xl"> 15 Hours / month of listening time from our audiobooks subscriber catalog </li>

         <button className=" btn btn-primary w-full " > Try Free For 1 Month </button>
         <p className=" text-xl " > free for 1 month then $10 per month after,  </p>

            </div>


            {/* plan 2 */}
            <div className="border-4  space-y-9 border-red-600  p-5" >
            <img className="w-60 h-60 mb-5 mx-auto" src="https://i.ibb.co/grND9Kk/385522126-344212231677893-8445201731388935557-n.png" alt="" />
          <section className=" flex gap-5 items-center" >
          <h1 className=" text-4xl font-bold p-3 " > Premium Duo</h1>
          <p className=" font-bold text" > $14 <br /> <span> per month</span> </p>
          </section>

  
        <li className=" text-xl"> premium account </li>
         <li className=" text-xl"> cancel anytimes </li>
         <li className=" text-xl"> 15 hours / month of listening time from our audioubooks catalog </li>


         <button className=" btn w-full btn-primary" > Get Premium Duo  </button>
         <p className=" text-xl " > for couples who reside at the some address </p>

            </div>

            {/* plan 3 */}
            <div className=" border-4  border-red-900 space-y-4 p-5" >
          <img className=" w-60 h-60 mb-5 mx-auto" src="https://i.ibb.co/x105TP5/Gold-Modern-Premium-Warranty-Logo.jpg" alt="" />
            <section className=" flex gap-5 items-center" >
          <h1 className=" text-3xl font-bold p-3 " > Premium Family</h1>
          <p className=" font-bold text" > $18 <br /> <span> per month</span> </p>
          </section>

         <li className=" text-xl"> up to premium  </li>
         <li className=" text-xl"> block explicit music </li>
         <li className=" text-xl"> access to spotify </li>
         <li className=" text-xl"> cancel anytime </li>
         <li className=" text-xl"> 15 Hours / month of listening time from our audiobooks subscriber catalog </li>

         <button className=" btn btn-primary w-full " > Get Premium Family </button>
         <p className=" text-xl" > for up to 6 family members residing at the address </p>

            </div>


          </div>



        </div>





            
        </div>
    );
};

export default Plans;