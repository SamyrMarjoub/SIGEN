import React, { Component } from "react";
import { Link as Link } from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
        this.eventobtn = this.eventobtn.bind(this)
    }

    eventobtn() {
        const menuBtn = document.querySelector('.menu-btn')
        const menu = document.querySelector('.opcs')
        if (!this.state.menuOpen) {
            menuBtn.classList.add('open');
            this.setState({ menuOpen: true })
            menu.classList.remove('none')
            menu.classList.add('block')

        } else {
            menuBtn.classList.remove('open');
            this.setState({ menuOpen: false })
            menu.classList.remove('block')
            menu.classList.add('none')

        }
    }
    render() {
        return (
            <header>
                <div className="container-m">
                    <div className="fd1">
                        <span className="logo-span">SIGEN</span>
                        <ul className="header-ul">
                            <li id="logo"><Link to=''>SIGEN</Link></li>
                            <li> <Link to='/'>Home</Link> </li>
                            <li> <Link to=''>Ferramentas</Link> </li>
                            <li><Link to=''>Contato</Link></li>
                            <li style={{ marginRight: '0' }}><Link to=''>Sobre</Link></li>

                        </ul>
                    </div>
                    <div className="fd2">
                        <div className="header-btn-div">
                            {!localStorage.getItem('token') ? <><button className="btn1"> <Link to='/registro'>Registrar</Link></button> 
                             <button className="btn2"><Link to='/login'>Log In</Link></button></> : <></>}

                        </div>
                        <div className="hamburguer-div">
                            <div className="menu-btn" onClick={this.eventobtn}>
                                <div className="menu-btn__burger"></div>
                            </div>
                            <div className="opcs none">
                                <div className="mb-d-b">
                                    <button className="btn1"><Link to={'/registro'}>Registrar</Link> </button>
                                    <button className="btn2"> <Link to={'/login'}>Log In</Link> </button>
                                </div>
                                <div className="list-c-m">
                                    <ul>
                                        <li><Link to={'/'}></Link> Home</li>
                                        <li>Ferramentas</li>
                                        <li>Contato</li>
                                        <li>Sobre</li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </header>
        )
    }
}
export default Header