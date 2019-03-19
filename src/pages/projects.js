import React, { Component } from 'react'
import Layout from "../templates/layout";
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../components/navbar';


class Projects extends Component {

    render() {
        return (
            <StaticQuery query={graphql`
  query {
    qq: file(relativePath: {eq: "QQscreenshot.png"}){
    childImageSharp{
      fluid(maxWidth: 800){
		...GatsbyImageSharpFluid
      }
    }
  }
  mblog: file(relativePath: {eq: "makerblogs.png"}){
    childImageSharp{
      fluid(maxWidth: 800){
		...GatsbyImageSharpFluid
      }
    }
  }
  ssp: file(relativePath: {eq: "ssp.png"}){
    childImageSharp{
      fluid(maxWidth: 800){
		...GatsbyImageSharpFluid
      }
    }
  }
  quarter: file(relativePath: {eq: "25q.png"}){
    childImageSharp{
      fluid(maxWidth: 800){
		...GatsbyImageSharpFluid
      }
    }
  }
  rhumroom: file(relativePath: {eq: "rhumroom.png"}){
    childImageSharp{
      fluid(maxWidth: 800){
		...GatsbyImageSharpFluid
      }
    }
  }
}
`
            } render={data => (

                <div>
                    <Layout>
                        <Navbar />
                        <section className="hero is-dark">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="is-size-1 is-size-3-mobile has-text-centered">
                                        Ronald Langeveld
                                        </h1>
                                    <h2 className="subtitle is-3 is-size-4-mobile has-text-centered">
                                        Need Web Development 🌍 or Tech Consultation ℹ️ to kick off for your next big thing 💡?
                                        </h2>

                                        <p className="is-size-5 has-text-centered">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something." rel="noopener noreferrer">hi@ronaldlangeveld.com</a></p>
<br />

                                    <p className="subtitle has-text-centered">Here's a few projects I've been involved with over the last few months.</p>

                                    <div className="columns is-multiline">

                                        <div className="column is-fullwidth">
                                            <div className="box">
                                                <a style={underline} className="is-size-4 has-text-link" href="https://www.linkedin.com/pulse/how-many-people-were-here-james-coetzee/?published=t">Quick Connect Analytical Dashboard</a>
                                                <br />
                                                <br />
                                                <Img fluid={data.qq.childImageSharp.fluid} />

                                                <div className="content is-medium">
                                                    <h4>Overview</h4>
                                                    <p>This is a custom application I developed for an SME based in South Africa. The client has a MongoDB database consisting of multiple collections and over 8 million documents that’s constantly increasing. I was able to to analyze the raw data into human readable statistics with graphical interpretation using Charts, as well as intergrating custom search queries. Lastly we added extra optimisation and automation to periodically cache some of the data to ensure the dashboards are loaded as quickly as possible for the end customer.</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>



                                    <div className="columns is-multiline">
                                        <div className="column is-one-quarter">
                                            <div style={boxheight} className="box">
                                                <a style={underline} className="is-size-5 has-text-link" href="https://makerblogs.xyz">Maker Blogs</a>
                                                <Img fluid={data.mblog.childImageSharp.fluid} />
                                                <br />
                                                <br />

                                                <div className="content is-small">
                                                    <h4>Overview</h4>
                                                    <p>A full stack website I built in Python / Django for users (Indie Makers) to submit their blogs. This project reached number 2, product of the day on Product Hunt and over 15,000 visits as of February 2019.</p>
                                                </div>


                                            </div>

                                        </div>

                                        <div className="column is-one-quarter">
                                            <div style={boxheight} className="box">
                                                <p style={underline} className="is-size-5 has-text-link">SSP</p>
                                                <Img fluid={data.ssp.childImageSharp.fluid} />
                                                <br />
                                                <br />

                                                <div className="content is-small">
                                                    <h4>Overview</h4>
                                                    <p>Front End development for a local client who needed a Sketch Design converted to a usable landing page as well as making it mobile responsive. The client can now pass the source code it on to his backend developer to put it on their server.</p>
                                                </div>


                                            </div>

                                        </div>


                                        <div className="column is-one-quarter">
                                            <div style={boxheight} className="box">
                                                <p style={underline} className="is-size-5 has-text-link">Quarter Kitchen & Cocktail Lab</p>
                                                <Img fluid={data.quarter.childImageSharp.fluid} />
                                                <br />
                                                <br />

                                                <div className="content is-small">
                                                    <h4>Overview</h4>
                                                    <p>I was contracted from the beautiful St Barths to build a landing page for their world class cocktail bar. The website lives on my hosting platform.</p>
                                                </div>


                                            </div>

                                        </div>


                                        <div className="column is-one-quarter">
                                            <div style={boxheight} className="box">
                                                <p style={underline} className="is-size-5 has-text-link">Rhumroom</p>
                                                <Img fluid={data.rhumroom.childImageSharp.fluid} />
                                                <br />
                                                <br />

                                                <div className="content is-small">
                                                    <h4>Overview</h4>
                                                    <p>Rhumroom is a semi-secret bar located in the Caribbean. I built the landing page in Bulma to keep it ultra responive amongst all devices. This site is due to be connected to a database to showcase their customers all their Rum's in the near future.</p>
                                                </div>


                                            </div>

                                        </div>


                                    </div>



                                </div>

                            </div>
                        </section>
                    </Layout>
                </div>


            )} />
        )
    }
}


const underline = {
    textDecoration: "underline",

};

const boxheight = {
    height: "28em"
}

export default Projects;

