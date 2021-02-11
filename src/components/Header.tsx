import React from 'react'

const Header:React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container">
            <a href="/" className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navBarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navBarNav" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    )
}

export default Header
