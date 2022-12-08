import React, { Component } from "react";
import professor from '../images/professor2.svg'
import aluno from '../images/aluno.svg'
import adm from '../images/adm.svg'
import security from '../images/security.svg'
import registro from '../images/registro.svg'
import Acessibilidade from '../images/acessibilidade.svg'
import github from '../images/github.svg'
import a from '../images/tirado.png'
import nice from '../images/Nice.png'
import ytb from '../images/ytb.svg'
import twitter from '../images/twitter.svg'
import link from '../images/link.svg'
import face from '../images/face.svg'
import Header from "./header";
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="cvc">

                    <main className="homemain">
                        <h1 className="homeh1">Veja suas Notas Escolares com Praticidade</h1>
                        <h2>Professores e alunos, use nossa aplicação grátis, veja e insira notas em tempo real e quando quiser.</h2>
                        {localStorage.getItem('token') ? <Link to={'/aluno/portal'}><button className="startbtn">Comecar!</button></Link>
                            : <Link to={'/login'}> <button className="startbtn">Comecar!</button></Link>}
                    </main>
                </div>
                <div className="second" id="second">
                    <div className="second-c">
                        <h3>Algumas funcionalidades que preparamos para você {':)'}</h3>
                        <div className="gridcontainer">
                            <div className="grid"><div className="grid-c">
                                <img src={professor} id='teacher' alt="" />
                                <h4>Área do Professor</h4>
                                <p>Com esta ferramenta, os professores podem inserir, modificar e ler as notas de qualquer aluno.</p>
                            </div></div>
                            <div className="grid"><div className="grid-c">
                                <img src={aluno} id='aluno' alt="" />
                                <h4 id="aluno-h4">Área do Aluno</h4>
                                <p>Os alunos poderão ver todas suas notas quando e onde quiser, chega de dúvidas!</p>
                            </div></div>
                            <div className="grid"><div className="grid-c">
                                <img src={adm} id='adm' alt="" />
                                <h4 id="adm-h4">Área do Administrador</h4>
                                <p id="p-adm">Os administradores, poderão alterar informações dos professores e alunos, bem como ter acesso as notas.</p>
                            </div></div>
                            <div className="grid"><div className="grid-c">
                                <img src={security} id='adm' alt="" />
                                <h4 id="adm-h4">Segurança aprimorada!</h4>
                                <p id="p-adm">Adicionamos rotas privadas, ou seja, só pessoas autorizadas como o administrador tem acesso a certas ferramentas.</p>
                            </div></div>
                            <div className="grid"><div className="grid-c">
                                <img src={registro} id='adm' alt="" />
                                <h4 id="adm-h4">Cadastro de Professores!</h4>
                                <p id="p-adm">Os professores poderão se cadastrar na plataforma, como e quando quiser.</p></div></div>
                            <div className="grid"><div className="grid-c">
                                <img src={registro} id='adm' alt="" />
                                <h4 id="adm-h4">Cadastro de Alunos!</h4>
                                <p id="p-adm">Assim como os professores, os alunos poderão se cadastrar na plataforma, como e quando quiser.</p>
                            </div></div>
                            <div className="grid"><div className="grid-c">
                                <img src={Acessibilidade} alt="" id='adm' />
                                <h4 id="adm-h4">Acessibilidade para todos!</h4>
                                <p id="p-adm">A página é responsiva a todo tipo de dispositivo, ou seja, irá funcionar em tudo que é possivel.</p></div></div>
                            <div className="grid"><div className="grid-c">
                                <img src={github} id='adm' alt="" />
                                <h4 id="adm-h4">Código Open Source</h4>
                                <p id="p-adm">O código deste projeto estará disponivel no meu github para qualquer um.</p></div></div>
                        </div>
                    </div>


                </div>
                <div className="img-div-c">
                    <div className="imgs-div">
                        <div className="flexi">
                            <div className="imgs1">
                                <img src={a} className='tirado' alt="" />

                            </div>
                            <div className="imgs2">
                                <h6 className="if1">Notas</h6>
                                <h5 className="if2">Insira, veja, modifique.</h5>
                                <p className="if3"><span className="specialspan"> É professor?</span> você poderá inserir ou modificar notas de alunos quando quiser. <span className="specialspan">É aluno?</span> você poderá ver as suas notas a qualquer momento.
                                </p>
                                <a href="*" className="if4" >Veja mais sobre {'>'} </a>
                            </div>
                        </div>
                        <div className="flexi flexi2">
                            <div className="imgs2">
                                <h6 className="if1">Registro</h6>
                                <h5 className="if2">Cadastro, Log-in, Segurança.</h5>
                                <p className="if3">Aluno ou professor, <span className="specialspan">cadastre-se</span> em nossa plataforma para desfruir de nossas ferramentas, tudo isso com total <span className="specialspan">segurança</span>.
                                </p>
                                <a href="*" className="if4">Veja mais sobre {'>'} </a>
                            </div>
                            <div className="imgs1">
                                <img src={nice} className='tirado' alt="" />

                            </div>
                        </div>
                        <div className="flexi flexig">
                            <div className="utl">
                                <h5 className="if2">Ferramentas e tecnologias utilizadas:</h5>
                                <div className="utlgrid">
                                    <div className="gridu gu1"></div>
                                    <div className="gridu gu2"></div>
                                    <div className="gridu gu3"></div>
                                    <div className="gridu gu4"></div>
                                    <div className="gridu gu5"></div>
                                    <div className="gridu gu6"></div>
                                    <div className="gridu gu7"></div>
                                    <div className="gridu gu8"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flexi ms">
                            <div className="flexiS">
                                <span className="bigspan">Use a aplicação em segundos.</span>
                                {localStorage.getItem('token') ? <Link to={'/aluno/portal'}><button className="startbtn colord">Comecar! :D</button></Link>
                                    : <Link to={'/login'}> <button className="startbtn colord">Comecar! :D</button></Link>}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="generalfooter footerstatic">
                    <div className="footer-c">
                        <div className="fc1 fcfooter">
                            <span className="footerspans"> Copyright  <span className="specialspan footerspans">©Samyr Marjoub</span>. All Rights Reserved.</span>
                        </div>
                        <div className="fc2 fc2footer">
                            <ul className="ful1 footerul">
                                <li><img src={ytb} alt='' /> </li>
                                <li><img src={twitter} alt='' /></li>
                                <li><img src={link} alt='' /></li>
                                <li><img src={face} alt='' /></li>

                            </ul>
                        </div>

                    </div>
                </footer>
            </>
        )
    }
}

export default Home