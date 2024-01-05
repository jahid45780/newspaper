import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return  <ProgressBar striped variant="warning" now={60} />
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;