import { useEffect, useState } from "react";
import NewsSlider from "./NewsSlider";



const Trending = () => {


    const [trending, setTrending] = useState([])
    useEffect(()=>{
        fetch('https://newspaper-server-site-mu.vercel.app/trending')
        .then(res => res.json())
        .then(data => setTrending(data) )
    },[])

    return (
        <div>


<section className=' mt-4 text-center' >
            <h1 className=' text-5xl text-orange-500 ' > ----- Prothom Alo ----- </h1>
            <p className=' text-4xl text-orange-700 ' > ----- 6 Trending Articles ----- </p>
        </section>
           
        <div className=" mt-4" >

          <NewsSlider trending={trending} > </NewsSlider> 
          
         </div>

            
        </div>
    );
};

export default Trending;