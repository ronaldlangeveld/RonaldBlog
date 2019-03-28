import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Navbar from '../components/navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import moment from "moment";
import Layout from "./layout";
import PropTypes from 'prop-types'



export default function PageTemplate({

    data, location // this prop will be injected by the GraphQL query below.
}) {
    const page = data.ghostPage;
    const { siteUrl, title, description } = data.site.siteMetadata;
    return (
        <>
        <Layout>
            <Navbar />
            <div>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <h1 className="title is-2 is-size-4-mobile has-text-centered">
                                    {page.title}
                                </h1>
                                <hr />
                                <div className="content is-medium is-small-mobile">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: page.html }}
                                    />
                                </div>
                                <Link to="/">← Back to homepage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</div>
</Layout>
        </>
    )

    page.propTypes = {
        data: PropTypes.shape({
            ghostPage: PropTypes.shape({
                title: PropTypes.string.isRequired,
                html: PropTypes.string.isRequired,
                feature_image: PropTypes.string,
            }).isRequired,
        }).isRequired,
        location: PropTypes.object.isRequired,
    }
}

const underline = {
    textDecoration: "underline",
  
  };

  const margintop = {
      marginTop: "5px"
  }



  export const postQuery = graphql`
  query($slug: String!) {
      ghostPage(slug: { eq: $slug }) {
          id,
          slug,
          title,
          html
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
