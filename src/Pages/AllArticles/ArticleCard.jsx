import { GiNewspaper } from "react-icons/gi";
import { BsCalendar2DateFill } from "react-icons/bs";
const ArticleCard = ({news}) => {
    const { image, news_title, date, publisher_name} = news;
    return (
        <div className=" h-[680px] bg-slate-50 shadow-lg rounded-3xl space-y-4 " >
        
<img className=" h-[450px] rounded-3xl " src={image} alt="" />

 <h1 className=" font-bold text-xl" > {news_title} </h1>

 <div>
  <p className=" flex items-center gap-3 justify-center text-2xl " > <BsCalendar2DateFill></BsCalendar2DateFill> {date} </p>
 <div className=" flex items-center gap-3 justify-center text-2xl" >
 <GiNewspaper></GiNewspaper> 
    <p> {publisher_name} </p>
 </div>
 </div>

 <div>

    <button className=" btn btn-success bg-slate-200" > Detail Nesw </button>
    
    </div> 

        </div>
    );
};

export default ArticleCard;