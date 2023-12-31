import './Featured.css'
const Featured = () => {
    return (
        
       <div className=' ' >

<section className=' mt-4 text-center' >
            <h1 className=' text-5xl text-orange-500 ' > ----- Featured Item ----- </h1>
            <p className=' text-4xl text-orange-700 ' > ----- Business Featured ----- </p>
        </section>

<div className="Featured-item mt-4  ">



          <section className=" lg:grid grid-cols-2 gap-6 " >

          <div>
            <img className=" lg:ml-16  lg:w-full" src="../../../../public/Featured/Image.jpg" alt="" />
          </div>

          <div>
            
            <div className=" grid grid-cols-1 gap-2 lg:grid-cols-2 ml-9 " >
            <img className=' lg:ml-[85px]'  src="../../../../public/Featured/Image (1).jpg" alt="" />
            <img className='' src="../../../../public/Featured/Image (2).jpg" alt="" />
            </div>

            <img  className=" lg:ml-28   lg:mt-[75px] " src="../../../../public/Featured/Image (3).jpg" alt="" />

          </div>

          </section>

            
        </div>




       </div>
    );
};

export default Featured;