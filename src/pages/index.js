
import React, { Component } from 'react'
import Layout from "../templates/layout";
import Intro from "../components/intro";
import Stack from "../components/stack";
import 'bulma/css/bulma.css';
import PostLink from "../components/post-link"
import PostIndex from "../components/postIndex";
// import Projects from "../components/projects";
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { StaticQuery, graphql } from 'gatsby'

class IndexPage extends Component {
  componentDidMount() {
    AOS.init({
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      initClassName: 'aos-init', // class applied after initialization
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }
  render() {
    return (
<StaticQuery query={graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
} render = {data => (

  <div>
    <Layout>
      <Navbar />
    <Intro />
    <Stack />
    <PostIndex>
       {data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
    </PostIndex>
  </Layout>
  </div>


)} />


    )
  }
}



export default IndexPage;