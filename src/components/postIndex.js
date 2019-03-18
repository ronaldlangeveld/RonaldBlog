import React from 'react';

const PostIndex = ({children}) => {
    return (
        <div>
            <div>
                <section id="postIndex" className="hero is-dark is-fullheight">
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