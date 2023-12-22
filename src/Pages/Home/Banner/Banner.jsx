import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from '../../../../public/banner/Prothom-Alo1.jpg'
import img2 from '../../../../public/banner/pAlo-2.jpg'
import img3 from '../../../../public/banner/Prothom-Alo-3.jpg'
import img4 from '../../../../public/banner/Prothom-Alo-4.jpg'


const Banner = () => {
    return (
        
        <Carousel className=' w-full h-full' >
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


    );
};

export default Banner;