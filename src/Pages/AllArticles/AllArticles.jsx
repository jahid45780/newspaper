import { useEffect, useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {

    const [trNews, setTrNews] = useState([])
    const [search, setSearch]= useState('')

    useEffect(()=>{
        fetch(`http://localhost:5000/allNews`)
        .then(res => res.json())
        .then(data => setTrNews(data) )
    },[search])
    // search news
    const handleSearch = e =>{
           e.preventDefault();
           const searchText = e.target.search.value;
           console.log(searchText);
           setSearch(searchText)

    } 

    return (
        <div>
           <section className="text-center" >
            <div>
                <form onSubmit={handleSearch} >
                <input className=" mt-5 items-center font-bold p-2 rounded-lg border-2 border-emerald-500" type="search" name="search" id="" />
                 <input className=" ml-2 text-xl" type="submit" value="Search" />
                <BsSearchHeart className=" relative ml-[630px] -mt-7 text-xl cursor-progress " ></BsSearchHeart>
                </form>
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