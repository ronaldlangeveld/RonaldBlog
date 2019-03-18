import React from 'react';

const PostIndex = ({children}) => {
    return (
        <div>
            <div>
                <section id="postIndex" className="hero is-dark is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="subtitle is-1 has-text-left">Blog Posts ✍️</h1>
                            <br />
                            <main data-aos="fade-right" >
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