import React from "react"
import Layout from "../templates/layout";
import Intro from "../components/intro";
import Stack from "../components/stack";
import 'bulma/css/bulma.css';
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import PostIndex from "../components/postIndex";


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
  <div>
<Layout>
    <Intro />
    <Stack />
    <PostIndex>
    <div>{Posts}</div>
    </PostIndex>
  </Layout>
  </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
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