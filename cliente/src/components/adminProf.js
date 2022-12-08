import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProfAdmin = () => {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [sexo, setSexo] = useState('M')
    const [senha, setSenha] = useState('')
    const [materia, setMateria] = useState('Portugues')


    function submit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/adminRegistro', { nome, email, sexo, senha, materia }).then(() => {
        })
        localStorage.setItem('tokenadminon', true)
        setNome('')
        setEmail('')
        setSexo('M')
        setSenha('')
        setMateria('Portugues')
        const inputnome = document.querySelector('.in')
        const inputemail = document.querySelector('.ie')
        const inputsenha = document.querySelector('.is')
        inputnome.value = ''
        inputemail.value = ''
        inputsenha.value = ''
        navigate('/login/professor')
    }

    return (
        <div className="loginmain">
            <header className="headerlogin">
                <div className="headerloginc">
                    <span className="logo-span-header"><Link to={'/'}>SIGEN</Link></span>
                </div>
            </header>
            <div className="maincontainerl">
                <main className="mainlogin">
                    <h3 className="h3login regp">Bem vindo! Professor, Faça seu registro agora</h3>
                    <form onSubmit={submit} className='profreg'>
                        <input type={'text'} placeholder='Nome' className='inputemail in' onChange={(e) => { setNome(e.target.value) }} required />
                        <input type={'email'} placeholder='Email' className='inputemail ie' onChange={(e) => { setEmail(e.target.value) }} required />
                        <input type={'password'} placeholder='Senha' className='inputemail is' onChange={(e) => { setSenha(e.target.value) }} required />

                        <label to='sexo' className="labelreg">Sexo:</label>
                        <select name="sexo" onChange={(e) => { setSexo(e.target.value) }} className='inputemail' required >
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                        <label to='materias' className="labelreg">Materia:</label>
                        <select name="materias" className='inputemail' onChange={(e) => { setMateria(e.target.value) }} required>
                            <option value="Portugues">Portugues</option>
                            <option value="Matematica">Matematica</option>
                            <option value="Fisica">Fisica</option>
                            <option value="Historia">Historia</option>
                            <option value="Biologia">Geografia</option>
                            <option value="Quimica">Quimica</option>
                            <option value="Redes">Redes</option>
                            <option value="IMC">IMC</option>
                            <option value="LTP">LTP</option>
                            <option value="APS">APS</option>
                            <option value="SEG">SEG</option>


                        </select>
                        <button className="submitbutton">Registrar</button>
                    </form>
                    <label className="registerspan">Já tem uma conta?<Link to={'/login/professor'} style={{ marginLeft: '5px' }}>Log-in </Link></label> <br />

                </main>
            </div>


        </div>

    )
}

export default ProfAdmin