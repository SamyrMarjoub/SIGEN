import React from "react"
import Header from '../components/header'
import a404img from '../images/svg4043.svg'
import { Link } from "react-router-dom"
import Footer from "./footer"
const a404 = () => {


    return (
        <>
            <Header className='a404header'></Header>
            <div className="maindiv404">

                <div className="divcontent404">
                    <span className="span404main">OPA, PARECE QUE ESTA PÁGINA NÃO EXISTE MEU NOBRE {':)'}</span>
                    <img src={a404img} className='a404img' />
                    <button className="a404button"><Link to='/'>VOLTAR AO INICIO</Link> </button>
                </div>
            <Footer></Footer>

            </div>

        </>
    )
}

export default a404