import React from 'react';

const Intro = () => {
    const largeTitle = {
        fontSize: "5em"
      };
      
      const underline = {
        textDecoration: "underline",
      
      };
 return (
    <div>
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 style={largeTitle} className="is-size-3-mobile has-text-centered">
            Ronald Langeveld
          </h1>
          <h2 className="subtitle is-3 is-size-4-mobile has-text-centered">
            Full Stack Software Developer
          </h2>
          <br/>
          <h1 className="title is-2 is-size-4-mobile has-text-centered">
          Need Web Development help or tech consultation to kick off for your next big thing?
          </h1>
          <h2 className="subtitle is-3 is-size-6-mobile has-text-centered">
            <a style={underline} href="https://nomadlist.com/@ronald" target="_blank">I'm available for remote projects</a>
          </h2>
         <p className="is-size-5">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something." target="_blank">hi@ronaldlangeveld.com</a></p>
          </div>
      </div>
    </section>
  </div>
    );
} 

export default Intro;