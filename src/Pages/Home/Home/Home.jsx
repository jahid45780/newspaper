import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Plans from "../Plans/Plans";
import Trending from "../Trending/Trending";


const Home = () => {
    return (
        <div>
            <SubNavbar></SubNavbar>
            <Banner></Banner>
            <Featured></Featured>
            <Trending></Trending>
            <Plans></Plans>
        </div>
    );
};

export default Home;