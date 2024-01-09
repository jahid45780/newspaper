import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from '../../../../public/banner/Prothom-Alo1.jpg'
import img2 from '../../../../public/banner/pAlo-2.jpg'
import img3 from '../../../../public/banner/Prothom-Alo-3.jpg'
import img4 from '../../../../public/banner/Prothom-Alo-4.jpg'


const Banner = () => {
    return (
        
        
     <div>
        <section className=' mt-4 text-center' >
            <h1 className=' text-5xl text-orange-500 ' > ----- Audience response ----- </h1>
            <p className=' text-4xl text-orange-700 ' > ----- Some feedback from our audience ----- </p>
        </section>

 <Carousel className='  mt-4 ' >
        <div>
            <img src={img1} />
         
        </div>
        <div>
            <img src={img2} />
         
        </div>
        <div>
            <img src={img3} />
      
        </div>
        <div>
            <img src={img4} />
      
        </div>
        
      
    </Carousel> 


     </div>


    );
};

export default Banner;