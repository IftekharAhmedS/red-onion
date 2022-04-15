import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-area">
                    <Link to='/'><img className=' w-auto h-12' src={logo} alt="logo" /></Link>
                </div>
                <div className="links-area"></div>
            </nav>
        </header>
    );
};

export default Header;