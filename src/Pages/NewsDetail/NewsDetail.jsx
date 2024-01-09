import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { BsCalendar2Date } from "react-icons/bs";
import { FaStreetView } from "react-icons/fa";
import { DiUnitySmall } from "react-icons/di";
import { MdMarkEmailRead } from "react-icons/md";
const NewsDetail = () => {
    const newsDetail = useLoaderData();
    const {image, news_title, date, views, publisher_name, publisher_email,description }= newsDetail; 
    return (
        <div className=" m-2" >
    <Marquee className=" mt-3 text-center text-4xl text-green-900  " > Our service is closed from 10am to 12pm on Saturdays and Sundays  </Marquee>

      <img className=" mt-6 w-full h-96" src={image} alt="" />

      <h1 className=" text-center font-extrabold text-4xl mt-4" > {news_title} </h1>

      <div className=" flex gap-10  justify-center items-center mt-4 " >
        <p className=" flex items-center justify-center gap-1  text-2xl " > <BsCalendar2Date></BsCalendar2Date> {date} </p>
        <p className="flex items-center justify-center text-2xl" > <FaStreetView></FaStreetView> {views} </p>
      </div> 
     
  <div className="lg:flex gap-10  justify-center items-center mt-4" >
    <p className="flex items-center justify-center gap-1  text-2xl" > <DiUnitySmall></DiUnitySmall> {publisher_name} </p>
    <p className="flex items-center justify-center gap-1  text-2xl" > <MdMarkEmailRead></MdMarkEmailRead> {publisher_email} </p>
  </div>

  <p className=" text-center text-3xl mt-3" > {description} </p>

        </div>
    );
};

export default NewsDetail;