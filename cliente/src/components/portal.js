import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Portal = () => {
    const navigate = useNavigate()
    const [alunoInfo, setAluoinfo] = useState([])

    useEffect(() => {
        const id = localStorage.getItem('IdAluno')
        axios.get(`http://localhost:3001/getAlunoInfo/${id}`).then((response) => {
            if (response.data) {
                setAluoinfo(response.data)

            } else {
                setAluoinfo('Erro')
            }
        })
        cor()
    })
    function cor() {
        const span1 = document.querySelector('.e1')
        const span2 = document.querySelector('.e2')
        const span3 = document.querySelector('.e3')
        const span4 = document.querySelector('.e4')
        const span5 = document.querySelector('.e5')
        const span6 = document.querySelector('.e6')
        const span7 = document.querySelector('.e7')
        const span8 = document.querySelector('.e8')
        const span9 = document.querySelector('.e9')
        const span10 = document.querySelector('.e10')
        const span11 = document.querySelector('.e11')
        const span12 = document.querySelector('.e12')

        const span13 = document.querySelector('.e13')
        const span14 = document.querySelector('.e14')
        const span15 = document.querySelector('.e15')
        const span16 = document.querySelector('.e16')
        const span17 = document.querySelector('.e17')
        const span18 = document.querySelector('.e18')
        const span19 = document.querySelector('.e19')
        const span20 = document.querySelector('.e20')
        const span21 = document.querySelector('.e21')
        const span22 = document.querySelector('.e22')
        const span23 = document.querySelector('.e23')
        const span24 = document.querySelector('.e24')

        const span25 = document.querySelector('.e25')
        const span26 = document.querySelector('.e26')
        const span27 = document.querySelector('.e27')
        const span28 = document.querySelector('.e28')
        const span29 = document.querySelector('.e29')
        const span30 = document.querySelector('.e30')
        const span31 = document.querySelector('.e31')
        const span32 = document.querySelector('.e32')
        const span33 = document.querySelector('.e33')
     
        try {
            if (alunoInfo.portugues < 5) {
                span1.classList.add('ruim')
            } else {
                span1.classList.add('bom')
            }
            if (alunoInfo.portugues2 < 5) {
                span12.classList.add('ruim')
            } else {
                span12.classList.add('bom')

            }
            if (alunoInfo.portugues3 < 5) {
                span23.classList.add('ruim')
            } else {
                span23.classList.add('bom')

            }
        } catch (error) {
            return
        }
        try {
            if (alunoInfo.matematica < 5) {
                span2.classList.add('ruim')
            } else {
                span2.classList.add('bom')
            }
            if (alunoInfo.matematica2 < 5) {
                span13.classList.add('ruim')
            } else {
                span13.classList.add('bom')

            }
            if (alunoInfo.matematica3 < 5) {
                span24.classList.add('ruim')
            } else {
                span24.classList.add('bom')

            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.historia < 5) {
                span3.classList.add('ruim')
            } else {
                span3.classList.add('bom')
            }
            if (alunoInfo.historia2 < 5) {
                span14.classList.add('ruim')
            } else {
                span14.classList.add('bom')
            }
            if (alunoInfo.historia3 < 5) {
                span25.classList.add('ruim')
            } else {
                span25.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.nota_fisica < 5) {
                span4.classList.add('ruim')
            } else {
                span4.classList.add('bom')
            }
            if (alunoInfo.nota_fisica2 < 5) {
                span15.classList.add('ruim')
            } else {
                span15.classList.add('bom')
            }
            if (alunoInfo.nota_fisica3 < 5) {
                span26.classList.add('ruim')
            } else {
                span26.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.biologia < 5) {
                span5.classList.add('ruim')
            } else {
                span5.classList.add('bom')
            }
            if (alunoInfo.biologia2 < 5) {
                span16.classList.add('ruim')
            } else {
                span16.classList.add('bom')
            }
            if (alunoInfo.biologia3 < 5) {
                span27.classList.add('ruim')
            } else {
                span27.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.quimica < 5) {
                span6.classList.add('ruim')
            } else {
                span6.classList.add('bom')
            }
            if (alunoInfo.quimica2 < 5) {
                span17.classList.add('ruim')
            } else {
                span17.classList.add('bom')
            } if (alunoInfo.quimica < 5) {
                span28.classList.add('ruim')
            } else {
                span28.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.redes < 5) {
                span7.classList.add('ruim')
            } else {
                span7.classList.add('bom')
            }
            if (alunoInfo.redes2 < 5) {
                span18.classList.add('ruim')
            } else {
                span18.classList.add('bom')
            }
            if (alunoInfo.redes3 < 5) {
                span29.classList.add('ruim')
            } else {
                span29.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.imc < 5) {
                span8.classList.add('ruim')
            } else {
                span8.classList.add('bom')
            }
            if (alunoInfo.imc2 < 5) {
                span19.classList.add('ruim')
            } else {
                span19.classList.add('bom')
            }
            if (alunoInfo.imc3 < 5) {
                span30.classList.add('ruim')
            } else {
                span30.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.ltp < 5) {
                span9.classList.add('ruim')
            } else {
                span9.classList.add('bom')
            }
            if (alunoInfo.ltp2 < 5) {
                span20.classList.add('ruim')
            } else {
                span20.classList.add('bom')
            }
            if (alunoInfo.ltp3 < 5) {
                span31.classList.add('ruim')
            } else {
                span31.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.Aps < 5) {
                span10.classList.add('ruim')
            } else {
                span10.classList.add('bom')
            }
            if (alunoInfo.Aps2 < 5) {
                span21.classList.add('ruim')
            } else {
                span21.classList.add('bom')
            }
            if (alunoInfo.Aps3 < 5) {
                span32.classList.add('ruim')
            } else {
                span32.classList.add('bom')
            }
        } catch (error) {
            return
        }

        try {
            if (alunoInfo.seg < 5) {
                span11.classList.add('ruim')
            } else {
                span11.classList.add('bom')
            }
            if (alunoInfo.seg2 < 5) {
                span22.classList.add('ruim')
            } else {
                span22.classList.add('bom')
            }
            if (alunoInfo.seg3 < 5) {
                span33.classList.add('ruim')
            } else {
                span33.classList.add('bom')
            }
        } catch (error) {
            return
        }

    }
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('idAluno')
        navigate('/')
    }
    return (
        <>
            <header className="headerlogin headlc">
                <div className="headerloginc">
                    <span className="logo-span-header"><Link to={'/'}>SIGEN</Link></span>
                <button className="logout" onClick={logout}>Fazer Logout</button>

                </div>

            </header>


            <div className="maincontainerprof alunosmc">
                <div className="alunosmcc">
                    <div className="containeramsc">
                        <h3 className="h3notas">Olá, <span className="specialspan">{alunoInfo.nome}</span>. Suas notas estão nesta lista</h3>


                        <table className="GeneratedTable">
                            <thead>
                                <tr>
                                    <th>DISCIPLINA</th>
                                    <th>1ª UNIDADE</th>
                                    <th>2ª UNIDADE</th>
                                    <th>3ª UNIDADE</th>
                                    <th>MEDIA FINAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Português</td>
                                    <td>{alunoInfo.portugues === null ? <>N/A</> : <>{alunoInfo.portugues}</>}</td>
                                    <td>{alunoInfo.portugues2 === null ? <>N/A</> : <>{alunoInfo.portugues2}</>}</td>
                                    <td>{alunoInfo.portugues3 === null ? <>N/A</> : <>{alunoInfo.portugues3}</>}</td>
                                    <td>{((alunoInfo.portugues + alunoInfo.portugues2 + alunoInfo.portugues3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Matematica</td>
                                    <td>{alunoInfo.matematica === null ? <>N/A</> : <>{alunoInfo.matematica}</>}</td>
                                    <td>{alunoInfo.matematica2 === null ? <>N/A</> : <>{alunoInfo.matematica2}</>}</td>
                                    <td>{alunoInfo.matematica3 === null ? <>N/A</> : <>{alunoInfo.matematica3}</>}</td>
                                    <td>{((alunoInfo.matematica + alunoInfo.matematica2 + alunoInfo.matematica3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Historia</td>
                                    <td>{alunoInfo.historia === null ? <>N/A</> : <>{alunoInfo.historia}</>}</td>
                                    <td>{alunoInfo.historia2 === null ? <>N/A</> : <>{alunoInfo.historia2}</>}</td>
                                    <td>{alunoInfo.historia3 === null? <>N/A</> : <>{alunoInfo.historia3}</>}</td>
                                    <td>{((alunoInfo.historia + alunoInfo.historia2 + alunoInfo.historia3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Fisica</td>
                                    <td>{alunoInfo.nota_fisica === null ? <>N/A</> : <>{alunoInfo.nota_fisica}</>}</td>
                                    <td>{alunoInfo.nota_fisica2 === null ? <>N/A</> : <>{alunoInfo.nota_fisica2}</>}</td>
                                    <td>{alunoInfo.nota_fisica3 === null ? <>N/A</> : <>{alunoInfo.nota_fisica3}</>}</td>
                                    <td>{((alunoInfo.nota_fisica + alunoInfo.nota_fisica2 + alunoInfo.nota_fisica3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Biologia</td>
                                    <td>{alunoInfo.biologia === null ? <>N/A</> : <>{alunoInfo.biologia}</>}</td>
                                    <td>{alunoInfo.biologia2 === null ? <>N/A</> : <>{alunoInfo.biologia2}</>}</td>
                                    <td>{alunoInfo.biologia3 === null ? <>N/A</> : <>{alunoInfo.biologia3}</>}</td>
                                    <td>{((alunoInfo.biologia + alunoInfo.biologia2 + alunoInfo.biologia3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Quimica</td>
                                    <td>{alunoInfo.quimica === null ? <>N/A</> : <>{alunoInfo.quimica}</>}</td>
                                    <td>{alunoInfo.quimica2 === null ? <>N/A</> : <>{alunoInfo.quimica2}</>}</td>
                                    <td>{alunoInfo.quimica3 === null ? <>N/A</> : <>{alunoInfo.quimica3}</>}</td>
                                    <td>{((alunoInfo.quimica + alunoInfo.quimica2 + alunoInfo.quimica3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>Redes</td>
                                    <td>{alunoInfo.redes === null ? <>N/A</> : <>{alunoInfo.redes}</>}</td>
                                    <td>{alunoInfo.redes2 === null ? <>N/A</> : <>{alunoInfo.redes2}</>}</td>
                                    <td>{alunoInfo.redes3 === null ? <>N/A</> : <>{alunoInfo.redes3}</>}</td>
                                    <td>{((alunoInfo.redes + alunoInfo.redes2 + alunoInfo.redes3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>IMC</td>
                                    <td>{alunoInfo.imc === null ? <>N/A</> : <>{alunoInfo.imc}</>}</td>
                                    <td>{alunoInfo.imc2 === null ? <>N/A</> : <>{alunoInfo.imc2}</>}</td>
                                    <td>{alunoInfo.imc3 === null ? <>N/A</> : <>{alunoInfo.imc3}</>}</td>
                                    <td>{((alunoInfo.imc + alunoInfo.imc2 + alunoInfo.imc3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>LTP</td>
                                    <td>{alunoInfo.ltp === null ? <>N/A</> : <>{alunoInfo.ltp}</>}</td>
                                    <td>{alunoInfo.ltp2 === null ? <>N/A</> : <>{alunoInfo.ltp2}</>}</td>
                                    <td>{alunoInfo.ltp3 === null ? <>N/A</> : <>{alunoInfo.ltp3}</>}</td>
                                    <td>{((alunoInfo.ltp + alunoInfo.ltp2 + alunoInfo.ltp3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>APS</td>
                                    <td>{alunoInfo.Aps === null ? <>N/A</> : <>{alunoInfo.Aps}</>}</td>
                                    <td>{alunoInfo.Aps2 === null ? <>N/A</> : <>{alunoInfo.Aps2}</>}</td>
                                    <td>{alunoInfo.Aps3 === null ? <>N/A</> : <>{alunoInfo.Aps3}</>}</td>
                                    <td>{((alunoInfo.Aps + alunoInfo.Aps2 + alunoInfo.Aps3) / 3).toFixed(1)}</td>
                                </tr>
                                <tr>
                                    <td>SEG</td>
                                    <td>{alunoInfo.seg === null ? <>N/A</> : <>{alunoInfo.seg}</>}</td>
                                    <td>{alunoInfo.seg2 === null ? <>N/A</> : <>{alunoInfo.seg2}</>}</td>
                                    <td>{alunoInfo.seg3 === null ? <>N/A</> : <>{alunoInfo.seg3}</>}</td>
                                    <td>{((alunoInfo.seg + alunoInfo.seg2 + alunoInfo.seg3) / 3).toFixed(1)}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>

        </>


    )

}
export default Portal