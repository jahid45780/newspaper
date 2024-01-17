// import TsParticles from "../../TsParticles/TsParticles";
// import TsParticles from "../../TsParticles/TsParticles";
import AllPublisher from "../AllPublisher/AllPublisher";
import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import Featured from "../Featured/Featured";
import Plans from "../Plans/Plans";
import Trending from "../Trending/Trending";


const Home = () => {
    return (
        <div>
           
           {/* <TsParticles></TsParticles> */}
            <Banner></Banner>
            <Featured></Featured>
            <Trending></Trending>
            <AllPublisher></AllPublisher>
            <Plans></Plans>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;