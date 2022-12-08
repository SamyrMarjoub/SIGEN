import { Outlet, Navigate } from "react-router-dom";

let useAuth = () => {
    if (localStorage.getItem('ProfessorID')) {
        const user = { loggedIN: false }
        return user && user.loggedIN
    }else{
        const user = { loggedIN: true }
        return user && user.loggedIN 
    }
}

const PrivatRoutesADMR = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/professorMenu' />

}

export default PrivatRoutesADMR