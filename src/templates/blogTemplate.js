import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    const { siteUrl, title, description } = data.site.siteMetadata;
    return (
        <>
            <Helmet
                title={frontmatter.title}
                meta={[
                    { charSet: 'utf-8' },
                    { httpEquiv: 'Content-Language', content: 'en-us' },
                    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
                    { httpEquiv: 'cleartype', content: 'on' },
                    {
                        name: 'viewport',
                        content: 'width=device-width,initial-scale=1'
                    },
                    { name: 'description', content: description },
                    { name: 'google', value: 'notranslate' },
                    { name: 'HandheldFriendly', content: 'true' },
                    { name: 'apple-mobile-web-app-title', content: title },
                    { name: 'apple-mobile-web-app-capable', content: 'yes' },
                    {
                        name: 'apple-mobile-web-app-status-bar-style',
                        content: 'white'
                    },
                    { name: 'msapplication-TileColor', content: '#da532c' },
                    { name: 'theme-color', content: '#ffffff' },

                    { name: 'twitter:card', content: 'summary_large_image' },
                    { name: 'twitter:site', content: '@ronaldlangeveld' },
                    { name: 'twitter:creator', content: '@ronaldlangeveld' },
                    { name: 'twitter:title', content: title },
                    { name: 'twitter:description', content: description },
                    { name: 'twitter:url', content: siteUrl },
                    { property: 'og:title', content: title },
                    { property: 'og:url', content: siteUrl },
                    { property: 'og:description', content: description },
                    { property: 'og:image:width', content: 1200 },
                    { property: 'og:image:height', content: 628 },
                    { property: 'og:image:alt', content: title },
                    { property: 'og:site_name', content: title },
                    { property: 'og:type', content: 'website' }
                ]}
            >
                <html lang="en" />
            </Helmet>
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
      <Link to="/" class="navbar-item">
        About
      </Link>
    </div>

    <div class="navbar-end">
    <a className="navbar-item" href="">Twitter</a>
    <a className="navbar-item" href="">Github</a>
    </div>
  </div>
</nav>
            <section className="hero is-dark is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <Link to="/" className="title is-1 is-size-3-mobile has-text-centered">
            Ronald Langeveld
          </Link>
 
          <p style={margintop} className="is-size-5 has-text-centered">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something." target="_blank">hi@ronaldlangeveld.com</a></p>

                    </div>

                </div>
            </section>

            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <h1 className="title is-2 is-size-4-mobile has-text-centered">
                                    {frontmatter.title}
                                </h1>
                                <h2 className="subtitle is-5 has-text-centered">
                                    {frontmatter.date}
                                </h2>
                                <hr />
                                <div className="content is-medium is-small-mobile">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: html }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
      }
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