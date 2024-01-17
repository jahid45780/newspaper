const AllPublisher = () => {
    return (
        <div className=" m-3" >
            
            <section className=' mt-4 text-center' >
            <h1 className=' text-5xl text-orange-500 ' > -----  All Publisher ----- </h1>
            <p className=' text-4xl text-orange-700 ' > -----   ----- </p>
        </section>
                   
                <section className=" grid grid-cols-1 lg:grid-cols-3 gap-2 md:grid-cols-2" >
                    <div data-aos="zoom-in" >
                        <img className=" w-full h-96 rounded-2xl" src="https://i.ibb.co/xC4kJLw/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg" alt="" />
                        <h1 className=" text-2xl font-bold text-center" > Rahim <br /> Publisher </h1>
                        <p className=" font-semibold text-center " > PROTHOM ALO </p>
                    </div>
                    <div data-aos="zoom-in" >
                        <img className=" w-full h-96 rounded-2xl" src="https://i.ibb.co/fDTWp0T/received-9602592169766792.jpg" alt="" />
                        <h1 className=" text-2xl font-bold text-center" > Jahid <br /> Publisher </h1>
                        <p className=" font-semibold text-center " > PROTHOM ALO </p>
                    </div>
                    <div data-aos="zoom-in" >
                        <img className=" w-full h-96 rounded-2xl" src="https://i.ibb.co/s6V3g9c/medium-shot-smiley-business-man.jpg" alt="" />
                        <h1 className=" text-2xl font-bold text-center" > Abraham <br /> Publisher </h1>
                        <p className=" font-semibold text-center " > PROTHOM ALO </p>
                    </div>
                </section>

        </div>
    );
};

export default AllPublisher;