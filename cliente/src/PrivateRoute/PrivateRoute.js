import { Outlet, Navigate } from "react-router-dom";

let useAuth = () => {
    if (localStorage.getItem('token')) {
        const user = { loggedIN: true }
        return user && user.loggedIN
    }else{
        const user = { loggedIN: false }
        return user && user.loggedIN 
    }
}

const PrivatRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/' />

}

export default PrivatRoutes