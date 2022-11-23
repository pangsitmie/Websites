import { useContext } from "react"
import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./";

const useAuth = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? (<Outlet />) : (<Navigate to="/" replace state={{ from: location }} />);
};
export default ProtectedRoutes;
