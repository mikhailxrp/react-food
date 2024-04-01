import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='navbar navbar-light bg-primary'>
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand text-light">React-app</Link>
            </div>
        </footer>
    );
};

export default Footer;