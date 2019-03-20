import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Navbar from '../components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import moment from "moment";
import Layout from "./layout";


export default function Template({

    data, // this prop will be injected by the GraphQL query below.
}) {
    const post = data.ghostPost;
    const { siteUrl, title, description } = data.site.siteMetadata;
    const postdate = moment(post.published_at).format("DD MMMM YYYY");  
    return (
        <>
        <Layout>
            <Navbar />
            <div>
            <section className="hero is-dark is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <Link to="/" className="title is-1 is-size-3-mobile has-text-centered">
            Ronald Langeveld
          </Link>
 
          <p style={margintop} className="is-size-5 has-text-centered">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something awesome." rel="noopener noreferrer">hi@ronaldlangeveld.com</a></p>

                    </div>

                </div>
            </section>

            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <h1 className="title is-2 is-size-4-mobile has-text-centered">
                                    {post.title}
                                </h1>
                                <h2 className="subtitle is-5 has-text-centered">
                                    {postdate}
                                </h2>
                                <hr />
                                <div className="content is-medium is-small-mobile">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: post.html }}
                                    />
                                </div>
                                <Link to="/#postIndex">← Back to article list</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
</div>
</Layout>
        </>
    )
}

const underline = {
    textDecoration: "underline",
  
  };

  const margintop = {
      marginTop: "5px"
  }

export const pageQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      title
      slug
      html
      feature_image
      published_at
    }
    site {
    siteMetadata {
      siteUrl
      title
      description
    }
  }
  }
`

