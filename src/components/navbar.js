import React from 'react';
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link to="/" class="navbar-item">
                            Home
    </Link>
                    </div>

                    <div class="navbar-end">
                        <a className="navbar-item" href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a className="navbar-item" href="https://github.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;




