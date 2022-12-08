import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../components/professor.css'
import xsvg from '../images/xsvg.svg'

const AdmProf = () => {
    const navigate = useNavigate()
    let [responsaAlunos, setResponseAlunos] = useState([])
    const [responseProfessor, setResponseProfessor] = useState([])
    const [Notas, setNota] = useState('')
    const [unidade, setUnidade] = useState('U1')
    const [alunoclicadom, setalunoclicado] = useState('')
    const [id, setId] = useState('')
    let [four, setFour] = useState('')

    useEffect(() => {
        Comecar()

    }, [])
    function Comecar() {
        axios.get('http://localhost:3001/getInfoAlunos').then((response) => {
            setResponseAlunos(response.data)
        })
        const id = localStorage.getItem('ProfessorID')
        axios.get(`http://localhost:3001/getInfoProfessor/${id}`).then((response) => {
            setResponseProfessor(response.data)
        })



    }

    function Adcnota(e) {

        e.preventDefault()

        if (Notas > 10) {
            alert('Insira um numero de 0 a 10')
            return
        }
        axios.put(`http://localhost:3001/addNotas/${responseProfessor[1]}`, { Notas, id, unidade }).then((response) => {
            if (response.data === 'ERRO') {
                alert('Aluno não encontrado')
            } else {
                alert('Nota adicionada com sucesso')
            }
        })
        if (four === 1) {
            axios.get('http://localhost:3001/ordernarA').then((response) => {
                setResponseAlunos(response.data)
            })
        } else if (four === 2) {
            axios.get('http://localhost:3001/ordernarI').then((response) => {
                setResponseAlunos(response.data)
            })
        } else if (four === 3) {
            axios.get('http://localhost:3001/ordernarTA').then((response) => {
                setResponseAlunos(response.data)
            })
        } else if (four === 4) {
            axios.get('http://localhost:3001/ordernarTB').then((response) => {
                setResponseAlunos(response.data)
            })
        }

        setNota(null)
        const inputemails = document.querySelector('.inputemails')
        const selectunidade = document.querySelector('.selectunidade')
        inputemails.value = ''


    }
    function logout() {
        localStorage.removeItem('ProfessorID')
        localStorage.removeItem('tokenadminon')
        navigate('/')
    }

    function fechar() {
        const blackscreen = document.querySelector('.blackscreenopacity')
        blackscreen.classList.toggle('blocka')

    }

    function edtnota(e) {
        const id = e.currentTarget.id
        const blackscreen = document.querySelector('.blackscreenopacity')
        setId(id)
        blackscreen.classList.toggle('blocka')
        axios.get(`http://localhost:3001/getNomeAluno/${id}`).then((response) => {
            setalunoclicado(String(response.data))
        })
    }

    function ordernarA() {
        axios.get('http://localhost:3001/ordernarA').then((response) => {
            setResponseAlunos(response.data)
        })
        setFour(1)
    }
    function ordernarI() {
        axios.get('http://localhost:3001/ordernarI').then((response) => {
            setResponseAlunos(response.data)
        })
        setFour(2)

    }
    function ordernarTA() {
        axios.get('http://localhost:3001/ordernarTA').then((response) => {
            setResponseAlunos(response.data)
        })
        setFour(3)

    }
    function ordernarTB() {
        axios.get('http://localhost:3001/ordernarTB').then((response) => {
            setResponseAlunos(response.data)
        })
        setFour(4)

    }
    return (
        <>
            <div className="maincontainerprof">

                <header className="headerlogin headlc">
                    <div className="headerloginc">
                        <span className="logo-span-header"><Link to={'/'}>SIGEN</Link></span>
                        <button className="logout" onClick={logout}>Fazer Logout</button>

                    </div>
                </header>


                <div className="flexmainprof">
                    <div className="fp1">
                        <div className="divalunosp">
                            <h1 className="h1profname">Olá Professor <span className="specialspan">{responseProfessor[0]}</span> </h1> <br />
                            <h3 className="h3profname">Sua materia é: <span className="specialspan">{responseProfessor[1]}</span> </h3>
                            <h3 className="h3profname">Abaixo, estara uma lista com todos os alunos do terceiro ano de informatica matriculados no SIGEN.</h3>
                       

                            <div className="ordernardiv">
                             
                                <button onClick={ordernarA} className='buttonordem'>ORDEM ALFABTICA</button>
                                <button onClick={ordernarI} className='buttonordem' >POR ID</button>
                                <button onClick={ordernarTA} className='buttonordem'>TURMA A</button>
                                <button onClick={ordernarTB} className='buttonordem'>TURMA B</button>



                            </div>

                            <div className="containerdivlist-a ">
                                {responsaAlunos.map((e) => {
                                    return (
                                        <div className="list-div-a">
                                            <p key={e.id} className='pinfoprof' id={e.id}>UID: {e.id} | Nome: {e.nome} |
                                                Telefone: {e.telefone} | Sexo: {e.sexo} | Turma: {e.turma} |
                                                {responseProfessor[1] === 'Matematica' ? <> 1ª UNIDADE: {e.matematica} | 2ª UNIDADE: {e.matematica2} | 3ª UNIDADE: {e.matematica3}</> : <></>}
                                                {responseProfessor[1] === 'Portugues' ? <> 1ª UNIDADE: {e.portugues} | 2ª UNIDADE: {e.portugues2} | 3ª UNIDADE: {e.portugues3}</> : <></>}
                                                {responseProfessor[1] === 'Fisica' ? <> 1ª UNIDADE: {e.nota_fisica} | 2ª UNIDADE: {e.nota_fisica2} | 3ª UNIDADE: {e.nota_fisica3}</> : <></>}
                                                {responseProfessor[1] === 'Redes' ? <> 1ª UNIDADE: {e.redes} | 2ª UNIDADE: {e.redes2} | 3ª UNIDADE: {e.redes3}</> : <></>}
                                                {responseProfessor[1] === 'IMC' ? <> 1ª UNIDADE: {e.imc} | 2ª UNIDADE: {e.imc2} | 3ª UNIDADE: {e.imc3}</> : <></>}
                                                {responseProfessor[1] === 'APS' ? <> 1ª UNIDADE: {e.Aps} | 2ª UNIDADE: {e.Aps2} | 3ª UNIDADE: {e.Aps3}</> : <></>}
                                                {responseProfessor[1] === 'SEG' ? <> 1ª UNIDADE: {e.seg} | 2ª UNIDADE: {e.seg2} | 3ª UNIDADE: {e.seg3}</> : <></>}
                                                {responseProfessor[1] === 'Quimica' ? <> 1ª UNIDADE: {e.quimica} | 2ª UNIDADE: {e.quimica2} | 3ª UNIDADE: {e.quimica3}</> : <></>}
                                                {responseProfessor[1] === 'Biologia' ? <> 1ª UNIDADE: {e.biologia} | 2ª UNIDADE: {e.biologia2} | 3ª UNIDADE: {e.biologia3}</> : <></>}
                                                {responseProfessor[1] === 'Historia' ? <> 1ª UNIDADE: {e.historia} | 2ª UNIDADE: {e.historia2} | 3ª UNIDADE: {e.historia3}</> : <></>}
                                                {responseProfessor[1] === 'LTP' ? <> 1ª UNIDADE: {e.ltp} | 2ª UNIDADE: {e.ltp2} | 3ª UNIDADE: {e.ltp3}</> : <></>}

                                            </p>
                                            <span className="editarnota" id={e.id} onClick={edtnota}  >Editar Nota</span>


                                        </div>

                                    )
                                })}
                            </div>
                            <span className="absolutespanqtd">Qtd de Alunos: <span className="specialspan">{responsaAlunos.length}</span></span>
                            <div className="buttongroup">
                                <div className="divbtng2">

                                </div>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
            <div className="blackscreenopacity none">
                <div className="floating-box-notas">
                    <div className="floatingboxc">
                        <h3 className="h3login">Insira a nota de <span className="specialspan">{alunoclicadom}</span></h3>
                        <form className="noab" onSubmit={Adcnota}>
                            <span className="spanindicador">Insira uma nota de 0 a 10</span>
                            <input type={'number'} placeholder='Nota' className='inputemail inputemails' step='0.01' required onChange={(e) => { setNota(e.target.value) }} />
                            <span className="spanindicador">Selecione a unidade</span>
                            <select name="unidades" className="selectunidade inputemail" onChange={(e) => { setUnidade(e.target.value) }} required>
                                <option value="U1" defaultValue={true} selected>Unidade 1</option>
                                <option value="U2">Unidade 2</option>
                                <option value="U3">Unidade 3</option>

                            </select> <br />
                            <button className="submitbutton" >Adicionar/Modificar Nota</button>
                        </form>
                        <div className="xsvgdiv" onClick={fechar}>
                            <img src={xsvg} alt='' />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}





export default AdmProf