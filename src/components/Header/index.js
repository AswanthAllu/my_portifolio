import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Header = () => {
    const location = useLocation();
    return (
        <div>
            <nav className="nav-bg mt-0 navbar navbar-expand-lg navbar-dark bg-light">
                <img src="https://i.imgur.com/BI2QK27.png" alt="nav logo" className="nav-logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-links-con navbar-nav">
                        <li className={`nav-link-item nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to='/'><p className="nav-link-item">Home</p></Link>
                        </li>
                        <li className={`nav-link-item nav-item ${location.pathname === '/skills' ? 'active' : ''}`}>
                            <Link to='/skills'><p className="nav-link-item">Skills</p></Link>
                        </li>
                        <li className={`nav-link-item nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
                            <Link to='/projects'><p className="nav-link-item">Projects</p></Link>
                        </li>
                        <li className={`nav-link-item nav-item ${location.pathname === '/certificates' ? 'active' : ''}`}>
                            <Link to='/certificates'><p className="nav-link-item">Certificates</p></Link>
                        </li>
                        <li className={`nav-link-item nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <Link to='/contact'><p className="nav-link-item">Contact Me</p></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
