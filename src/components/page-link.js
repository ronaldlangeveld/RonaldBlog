import React from "react"
import { Link } from "gatsby"

const PageLink = ({ post }) => {


  return (
    
    <Link activeClassName='is-active' className="navbar-item" to={post.slug}>
    {post.title}
    </Link>

  )}

export default PageLink;