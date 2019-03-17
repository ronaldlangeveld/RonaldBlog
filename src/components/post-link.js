import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    
  <div className="subtitle is-3">
    <Link to={post.frontmatter.path}>
      <strong>{post.frontmatter.title}</strong> | {post.frontmatter.date}
    </Link>
  </div>
)

export default PostLink