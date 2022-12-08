import React, { Component } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

class Registro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
            telefone: '',
            sexo: 'M',
            turma: 'A'


        }
        this.submit = this.submit.bind(this)
    }
    submit() {
        axios.post('http://localhost:3001/registro', {
            nome: this.state.nome,
            email: this.state.email, senha: this.state.senha, telefone: this.state.telefone, sexo: this.state.sexo, turma: this.state.turma
        }).then(() => {
            alert('Registro feito com sucesso!')
        })
    }

    render() {
        return (
            <div className="loginmain">
                <header className="headerlogin">
                    <div className="headerloginc">
                        <span className="logo-span-header"><Link to={'/'}>SIGEN</Link></span>
                    </div>
                </header>
                <div className="maincontainerl">
                    <main className="mainlogin">
                        <h3 className="h3login reg">Faça registro para continuar</h3> <br />
                        <form className="rega">
                            <span className="spanre"> <Link to='/registro/professor'>É professor? Registre-se aqui.</Link> </span>
                            <input type={'text'} className='inputemail' required placeholder="Nome" onChange={(e) => { this.setState({ nome: e.target.value }) }} />
                            <input type={'email'} className='inputemail' required placeholder="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <input type={'password'} className='inputemail' required placeholder="Senha" onChange={(e) => { this.setState({ senha: e.target.value }) }} />
                            <input type={'tel'} className='inputemail' required placeholder="Telefone" maxLength='11' onChange={(e) => { this.setState({ telefone: e.target.value }) }} />
                            <label to='sexo' className="labelreg">Sexo:</label>
                            <select name="sexo" required className='inputemail' onChange={(e) => { this.setState({ sexo: e.target.value }) }}>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                            </select>
                            <label to='turma' className="labelreg">Turma:</label>
                            <select name="turma" required className='inputemail' onChange={(e) => { this.setState({ turma: e.target.value }) }}>
                                <option value="A">3° INFO A VESPERTINO</option>
                                <option value="B">3° INFO B VESPERTINO</option>
                            </select>
                            <button onClick={this.submit} className='submitbutton'>Cadastrar {'=)'}</button>
                            <span className="registerspan">Já tem uma conta? <Link to={'/login'}>Log in</Link></span> <br />
                            <span className="forget"><Link to={'#'}>Preciso de ajuda</Link></span>
                        </form>

                    </main>



                </div>

            </div>
        )
    }
}

export default Registro