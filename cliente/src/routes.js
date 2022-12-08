import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/home";
import Login from './components/login'
import Registro from './components/registro'
import PrivatRoutes from "./PrivateRoute/PrivateRoute";
import PrivatRoutes2 from "./PrivateRoute/PrivateRouter2";
import PrivatRoutesA from "./PrivateRoute/PrivateRouteA";
import PrivatRoutesB from "./PrivateRoute/PrivateRouteB";
import PrivatRoutesDashBoard from "./PrivateRoute/privateRouteAdminDashboard";
import PrivatRoutesAluno from "./PrivateRoute/PrivateRouteAluno";
import DashBoard from './components/professoradm.js'
import RotaProfesor from './components/profR'
import Paginateste from './components/teste'
import ProfAdmin from "./components/adminProf"
import AdminLogin from "./components/loginProfessor";
import A404 from "./components/404";
import PortalDoAluno from './components/portal'
import PrivatRoutesADMR from "./PrivateRoute/PrivateRouteTokenadm";
import Adm from './components/adm'
const Rotas = () => {
    return (
        <BrowserRouter BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact index path='/' element={<Home />} />
               
                <Route element={<PrivatRoutesDashBoard />}>
                    <Route exact path='/professorMenu' element={<DashBoard />} />
                    <Route exact path='/administrador' element={<Adm />}/>
                </Route>
                <Route element={<PrivatRoutesAluno />}>
                    <Route exact path='/aluno/portal' element={<PortalDoAluno />} />
                </Route>

                <Route element={<PrivatRoutesB />}>
                    <Route element={<PrivatRoutesADMR />}>
                        <Route exact path="/login/professor" element={<AdminLogin />} />

                    </Route>

                </Route>
                <Route element={<PrivatRoutesA />}>
                    <Route element={<PrivatRoutesADMR />}>
                        <Route exact path="/registroprof" element={<ProfAdmin />} />
                    </Route >
                </Route>
                <Route element={<PrivatRoutes2 />}>
                    <Route exact path="/login" element={<Login />} />
                </Route>
                <Route element={<PrivatRoutes2 />}>
                    <Route exact path="/registro" element={<Registro />} />
                </Route>

                <Route exact path="/autenticacao" element={<RotaProfesor />} />
                <Route element={<PrivatRoutes />}>
                    <Route exact path="/teste" element={<Paginateste />} />

                </Route>
                <Route path="*" element={<A404 />} />
            </Routes>
        </BrowserRouter >
    )

}
export default Rotas