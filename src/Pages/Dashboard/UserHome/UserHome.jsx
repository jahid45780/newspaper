import UseAuth from "../../../Hooks/UseAuth";


const UserHome = () => {
    const {user} = UseAuth()
    return (
        <div>
            
        <h1 className=" text-center text-cyan-400 text-3xl" >
            <span> Hi, WelCome </span>
            {
                user?.displayName ? user.displayName : 'Back' 
            }
        </h1>

        <img className=" w-40 h-40 rounded-full mx-auto mt-3" src={user.photoURL} alt="" />

    </div>
    );
};

export default UserHome;