import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AdminLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/loginAdmin', { email, senha }).then((response) => {
            if (response.data === 'EMAIL OU SENHA INVALIDOS') {
                alert('Email ou senha invalidos')
                const email = document.querySelectorAll('.inputemail')
                for (let i = 0; i < email.length; i++) {
                email[i].value = ''
                }
            } else {
                localStorage.setItem('tokenadminon', true)
                localStorage.setItem('ProfessorID', response.data)
                navigate('/professorMenu')
            }
        })

    }

    return (
        <div className="loginmain">
            <header className="headerlogin">
                <div className="headerloginc">
                    <span className="logo-span-header"> <Link to={'/'}>SIGEN</Link> </span>
                </div>
            </header>
            <div className="maincontainerl">
                <main className="mainlogin">
                    <h3 className="h3login regp">Bem vindo Professor, faça Log In.</h3>
                    <form onSubmit={submit} className='profreg'>
                        <input type={'text'} placeholder='Email' className='inputemail' onChange={(e) => { setEmail(e.target.value) }} required /> <br />
                        <input type={'password'} placeholder='Senha' className='inputemail' onChange={(e) => { setSenha(e.target.value) }} required /> <br />
                        <button className="submitbutton">Log In</button>
                        <label className="registerspan">Não tem uma conta?<Link to={'/registroprof'} style={{ marginLeft: '5px' }}>Registre-se </Link></label> <br />

                    </form>
                </main>
            </div>


        </div>

    )
}

export default AdminLogin