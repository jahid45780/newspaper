import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NewsSlider = ({ trending }) => {
    return (
        <div>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <div>
                    {
                        trending?.map((singleTrend, index) => <SwiperSlide key={index}>
                            {console.log(trending)}

                            <img className=' h-80 w-90' src={singleTrend?.image} alt="" />
                            <h2 className=' text-3xl mt-2 font-bold' >{singleTrend.news_title}</h2>
                            <p className=' mt-4' > {singleTrend?.description} </p>
                            


                        </SwiperSlide>)
                    }
                </div>


            </Swiper>


        </div>
    );
};

export default NewsSlider;