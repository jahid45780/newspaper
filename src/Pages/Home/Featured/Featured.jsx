import './Featured.css'
const Featured = () => {
    return (
        
       <div>

<section className=' mt-4 text-center' >
            <h1 className=' text-5xl text-orange-500 ' > ----- Featured Item ----- </h1>
            <p className=' text-4xl text-orange-700 ' > ----- Business Featured ----- </p>
        </section>

<div className="Featured-item mt-4 bg-fixed ">



          <section className=" grid grid-cols-2 gap-6 mt-4 " >

          <div>
            <img className=" h-full w-full" src="../../../../public/Featured/Image.jpg" alt="" />
          </div>

          <div>
            
            <div className="lg:flex gap-4" >
            <img src="../../../../public/Featured/Image (1).jpg" alt="" />
            <img src="../../../../public/Featured/Image (2).jpg" alt="" />
            </div>

            <img className="mt-3 " src="../../../../public/Featured/Image (3).jpg" alt="" />

          </div>

          </section>

            
        </div>




       </div>
    );
};

export default Featured;