import React from "react"
import { Link } from "gatsby"
import moment from "moment";

const PostLink = ({ post }) => {

  const postdate = moment(post.published_at).format("DD MMMM YYYY");  
  

  return (
    
  <div className="subtitle is-3 is-size-6-mobile">
    <Link to={post.slug}>
      <strong>{post.title}</strong> | {postdate}
    </Link>
  </div>

  )}

export default PostLink