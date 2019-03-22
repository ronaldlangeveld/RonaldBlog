import React, { Component } from 'react'
import Link from 'gatsby-link';

export default class playground extends Component {
    render() {
        return (
            <div>
                <section className="hero is-light is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="subtitle is-1 has-text-left">Playground ⛳️</h1>
                            <h2 className="subtitle is-5 has-text-left">Just a few things I'm making for fun</h2>
                            <br />
                            <div data-aos="fade-right">
                                <div className="subtitle is-3 is-size-6-mobile">
                                    <Link to="/loadshedding">
                                        <strong>💡 Loadshedding Status Page</strong>
                                    </Link>
                                </div>
                                <div className="subtitle is-3 is-size-6-mobile">
                                    <a href="https://booklog.club">
                                        <strong>📚 Book Log</strong>
                                    </a>
                                </div>
                                <div className="subtitle is-3 is-size-6-mobile">
                                    <a href="https://makerblogs.xyz">
                                        <strong>👩🏻‍💻 Maker Blogs</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
