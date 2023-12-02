import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    // nav menu handler
    const openHandler = () => {
        const menu = document.querySelector('.menu-list');
        const open = document.querySelector('.open');
        const close = document.querySelector('.close');
        menu.style.top = '90%';
        open.classList.toggle('d_block');
        close.classList.toggle('d_block');
    }


    // close buttons
    const closeHandler = () => {
        const menu = document.querySelector('.menu-list');
        const open = document.querySelector('.open');
        const close = document.querySelector('.close');
        menu.style.top = '-300%';
        open.classList.toggle('d_block');
        close.classList.toggle('d_block');
    }

    return (
        <header className="navbar" >
            <div className="navbar-container">
                <div className="logo-container">
                    <Link to="/" className="logo">HAWC</Link>
                </div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list-item"> <Link to='/' className='bold'>Home</Link></li>
                        <li className="menu-list-item"><Link to='/'>Classes</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <span
                    className="material-symbols-outlined close"
                    onClick={closeHandler}>
                    close
                </span>
                <span
                    className="material-symbols-outlined open d_block"
                    onClick={openHandler}>
                    menu
                </span>
            </div>
        </header>
    )
}

export default Nav