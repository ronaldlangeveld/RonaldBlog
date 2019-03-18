import React, { Component } from 'react'
import { Link } from "gatsby"


class Navbar extends Component {
    state = {
        isActive: false
    };

    handleClick = () => {
        console.log('handleClick');
        this.setState(state => ({ isActive: !state.isActive }));
    };


    render() {
        return (
            <div>
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a onClick={this.handleClick} role="button" className={this.state.isActive ? 'navbar-burger burger is-active' : 'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">
                                Home
    </Link>
                        </div>

                        <div className="navbar-end">
                            <a className="navbar-item" href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a className="navbar-item" href="https://github.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar;