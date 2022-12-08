import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LoginT = () => {
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    function submit(e) {
        e.preventDefault()

        axios.post('http://localhost:3001/adminpass', { password, user }).then((response) => {
            if (response.data === 'EMAIL OU SENHA INVALIDOS') {
                navigate('/')
            } else {
                alert('ok')
                localStorage.setItem('tokenadmin', true)
                navigate('/registroprof')
            }
        })

    }
    return (
        <div className="loginmain">
            <header className="headerlogin">
                <div className="headerloginc">
                    <span className="logo-span-header"><Link to={'/'}>SIGEN</Link></span>
                </div>
            </header>
            <div className="maincontainerl2">
                <div className="ll2">
                    <div className="maincc">
                        <h3 className="h3login profr">Olá Professor, digite o úsuario e a senha do administrador para continuar.</h3> <br />
                        <form onSubmit={submit} className='admform'>
                            <input type={'text'} placeholder='Úsuario'  onChange={(e) => { setUser(e.target.value) }} className='inputemail corre' /> <br />
                            <input type={'password'} className='inputsenha corre' placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }} /> <br />
                            <button className="submitbutton expnsb">Login</button>
                        </form>
                        <Link to={'#'}>  <span className="forget"> Não sei quais são os dados</span></Link>
                    </div>
                </div>

                <div className="divloginimg">
                    <div className="divloginimg2"></div>
                </div>

            </div>



        </div>
    )
}





export default LoginT