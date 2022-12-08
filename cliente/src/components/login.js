import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './login.css'


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [response, setResponse] = useState('')

    function submit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email: email, senha: senha }).then((response) => {
            if (response.data === 'EMAIL OU SENHA INVALIDOS') {
                setResponse(response.data)
                alert('EMAIL OU SENHA INVALIDOS')
               const inputsenha = document.querySelector('.inputsenha')
               const inputemail = document.querySelector('.inputemail')
               inputsenha.value = ''
               inputemail.value = ''

            } else {
                localStorage.setItem('token', true)
                localStorage.setItem('IdAluno', response.data)
                navigate('/aluno/portal')
                console.log('ok')
            }
        })
    }
function alerta(){
    alert('Em Breve')
}
    return (
        <div className="loginmain">
            <header className="headerlogin">
                <div className="headerloginc">
                    <span className="logo-span-header"><Link to={'/'}>SIGEN</Link> </span>
                </div>
            </header>
            <div className="maincontainerl">
                <main className="mainlogin">
                    <h3 className="h3login">Faça login para continuar</h3>
                    <form onSubmit={submit}>
                        <input type={'email'} onChange={(e) => { setEmail(e.target.value) }} required className="inputemail" placeholder="Insira seu email" />
                        <input type={'password'} maxLength='11' onChange={(e) => { setSenha(e.target.value) }} required className="inputsenha" placeholder="Senha" />
                        <button className="submitbutton">Entrar {':)'} </button>
                        <label className="registerspan">Não tem uma conta?<Link to={'/registro'} style={{ marginLeft: '5px' }}>Registre-se </Link></label> <br />
                        <span className="forget"><Link to={''}>Esqueci minha senha</Link> </span> 
                        {/* <span className="forget professorlogins"><Link to={'/registro/professor'}>Login do professor</Link> </span> */}

                    </form>
                    <div className="containerlogd">
                        <div className="googlel logd" onClick={alerta}>
                            <div className="iconsol t1"></div>
                            <div className="texticonsol">
                                <span>Login com Google</span>
                            </div>
                        </div>
                        <div className="gitl logd" onClick={alerta}>
                            <div className="iconsol t2"></div>
                            <div className="texticonsol">
                                <span>Login com GitHub</span>
                            </div>
                        </div>
                        <div className="facel logd" onClick={alerta}>
                            <div className="iconsol t3"></div>
                            <div className="texticonsol">
                                <span>Login com Facebook</span>
                            </div>
                        </div>
                    </div>


                    <p className="warningterm">Ao continuar, você estará concordando com os <Link to={''}>Termos de uso </Link>
                        e <Link to={''}>Privacidade</Link> do SIGEN.</p>

                    {/* {response === 'EMAIL OU SENHA INVALIDOS' ? <p className="errorspan">Email ou senha invalidos</p> : <></>} */}

                </main>
            </div>



        </div>
    )

}

export default Login