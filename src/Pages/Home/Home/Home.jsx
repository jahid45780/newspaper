import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
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
            <Contacts></Contacts>
        </div>
    );
};

export default Home;