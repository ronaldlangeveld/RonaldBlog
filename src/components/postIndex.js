import React from 'react';
import { Link } from "gatsby";

const PostIndex = ({children}) => {
    return (
        <div>
            <div>
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title is-1 has-text-centered">Blog Posts</h1>
                            <br />
                            <main>
                              {children}
                          </main>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default PostIndex;