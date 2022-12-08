import React from "react"
import { Link } from "react-router-dom"
import ytb from '../images/ytb.svg'
import twitter from '../images/twitter.svg'
import link from '../images/link.svg'
import face from '../images/face.svg'

const Footer = () => {


    return (
        <>
            <footer className="generalfooter">
                <div className="footer-c">
                    <div className="fc1 fcfooter">
                        <span className="footerspans"> Copyright  <span className="specialspan footerspans">©Samyr Marjoub</span>. All Rights Reserved.</span>
                    </div>
                    <div className="fc2 fc2footer">
                        <ul className="ful1 footerul">
                            <li><img src={ytb} /> </li>
                            <li><img src={twitter} /></li>
                            <li><img src={link} /></li>
                            <li><img src={face} /></li>

                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer