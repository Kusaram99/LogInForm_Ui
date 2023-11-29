import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <header className="navbar" >
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/" className="logo">HAWC</Link>
                </div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list-item"> <Link to='/' className='active'>Home</Link></li>
                        <li className="menu-list-item"><Link to='/'>Classes</Link></li> 
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Nav