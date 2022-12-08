import React from "react";

import { Link } from "react-router-dom";
const Adm = () => {
    return (
        <div className="loginmain">
            <header className="headerlogin">
                <div className="headerloginc">
                    <span className="logo-span-header"><Link to={'/'}>SIGEN</Link></span>
                </div>
            </header>
            <div className="maincontainerl">
                <div className="widthadmdiv">
                <h1>Olá administrador 01</h1>

                </div>

            </div>
        </div>
    )
}
export default Adm