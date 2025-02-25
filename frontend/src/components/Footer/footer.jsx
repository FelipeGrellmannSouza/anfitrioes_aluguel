import React from 'react';
import logo from '../../imgs/Logo-Vertical-White.png';
import iconLinkedin from '../../imgs/linkedin.png';
import iconGitHub from '../../imgs/github.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark mt-2 ">
            <div className="mainDiv py-5 text-center text-light">
                <img className='logo' src={logo} alt="logo" />
                <div>
                    <p className='pt-3'>
                        Sistema desenvolvido por <b>Felipe Grellmann de Souza</b>
                    </p>
                    <div className='contato'>
                        <a href="https://www.linkedin.com/in/felipegrellmann/"><img width="40" className="mx-4" src={iconLinkedin} alt='icon Linkedin' /></a>
                        <a href="https://github.com/FelipeGrellmannSouza"><img width="50" className="mx-4" src={iconGitHub} alt='git icon' /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;