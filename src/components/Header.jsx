import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-light">React-app</Link>
                <a href="https://github.com/mikhailxrp/react-food" className="navbar-brand text-light" >Repo-link</a>
            </div>
        </nav>
    );
};

export default Header;