import { useEffect, useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {

    const [trNews, setTrNews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allNews')
        .then(res => res.json())
        .then(data => setTrNews(data) )
    },[])

    return (
        <div>
           <section className="text-center" >
            <div>
                <input className=" mt-40 items-center p-2 rounded-lg border-2 border-emerald-500" type="search" name="" id="" />
                <button className="ml-2 text-xl " >Search</button>
                <BsSearchHeart className=" relative ml-[630px] -mt-7 text-xl cursor-progress " ></BsSearchHeart>
            </div>

           <div className=" grid lg:grid-cols-3 gap-3 m-2 mt-4 md:grid-cols-2 " >

               {

                 trNews && 
                 trNews?.map( (news) => <ArticleCard key={news._id} news={news}></ArticleCard> )

               }
             

           </div>

           </section>
        </div>
    );
};

export default AllArticles;