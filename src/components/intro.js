import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css'


export default () => (
    <StaticQuery
    query={graphql`
  query {
  file(relativePath: {eq: "profile.jpg"}){
    childImageSharp{
      fluid(maxWidth: 200){
		...GatsbyImageSharpFluid
      }
    }
  }
}
`}
render={data => (
    <div>
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div data-aos="fade-up" className="container has-text-centered">
            <Img style={ProfilePic} fluid={data.file.childImageSharp.fluid} />
          <h1 style={largeTitle} className="is-size-3-mobile has-text-centered">
            Ronald Langeveld
          </h1>
          <h2 className="subtitle is-3 is-size-4-mobile has-text-centered">
            Full Stack Web Developer
          </h2>
          <br/>
          <h1 className="subtitle is-2 is-size-4-mobile has-text-centered">
          Need Web Development 🌍 help or tech consultation ℹ️ to kick off for your next big thing 💡?
          </h1>
          <h2 className="subtitle is-3 is-size-6-mobile has-text-centered">
            <p className="has-text-weight-bold">I'm available for remote projects 💻</p>
          </h2>
         <p className="is-size-5">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something." rel="noopener noreferrer">hi@ronaldlangeveld.com</a></p>
         <br />
         <h2 className="subtitle is-5 has-text-centered">Over the last 2 years I've worked on many different projects, both personal and for clients (individuals and enterprises), ranging from full featured websites to blazing fast single page applications.</h2>
          </div>
          
      </div>
    </section>
  </div>
)}/>)



    const largeTitle = {
        fontSize: "5em"
      };

      const ProfilePic = {
          borderRadius: "100%",
          width: "150px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"

      }
      
      const underline = {
        textDecoration: "underline",
      
      };

//       console.log({data});
//  return (
//     <div>
//     <section className="hero is-dark is-fullheight">
//       <div className="hero-body">
//         <div className="container has-text-centered">
//             {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
//           <h1 style={largeTitle} className="is-size-3-mobile has-text-centered">
//             Ronald Langeveld
//           </h1>
//           <h2 className="subtitle is-3 is-size-4-mobile has-text-centered">
//             Full Stack Software Developer
//           </h2>
//           <br/>
//           <h1 className="title is-2 is-size-4-mobile has-text-centered">
//           Need Web Development help or tech consultation to kick off for your next big thing?
//           </h1>
//           <h2 className="subtitle is-3 is-size-6-mobile has-text-centered">
//             <a style={underline} href="https://nomadlist.com/@ronald" target="_blank" rel="noopener noreferrer">I'm available for remote projects</a>
//           </h2>
//          <p className="is-size-5">Contact me <a style={underline} href="https://twitter.com/ronaldlangeveld" target="_blank" rel="noopener noreferrer">@ronaldlangeveld</a> or <a style={underline} href="mailto:hi@ronaldlangeveld.com?subject=Hi, lets develop something." rel="noopener noreferrer">hi@ronaldlangeveld.com</a></p>
//           </div>
//       </div>
//     </section>
//   </div>
//     );
// } 

// export default Intro;


// export const query = graphql`
//   query {
//   file(relativePath: {eq: "profile.jpg"}){
//     childImageSharp{
//       fluid(maxWidth: 700){
// 				src
//       }
//     }
//   }
// }
// `