import { USERDETAILS } from "./enviroment";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ role }) => {
    const user = JSON.parse(localStorage.getItem(USERDETAILS))
    if (!user) return <Navigate to="/signin" />
    if (!role?.includes(user?.role)) return <Navigate to="/UnAuthorized" />
    return <Outlet />
}

export default ProtectRoute