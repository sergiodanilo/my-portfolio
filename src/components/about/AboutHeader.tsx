import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

export default function AboutHeader() {

  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: {eq: "profile.png"}) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="header-intro theme-bg-primary text-white py-5">
      <div className="container">
        <div className="profile-teaser media flex-column flex-md-row">
          <Img
            fixed={data.image.childImageSharp.fixed}
            className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
          />
          <div className="media-body text-center text-md-left">
            <div className="lead">Hello, my name is</div>
            <h2 className="mt-0 display-4 font-weight-bold">Sérgio Holanda</h2>
            <div className="bio mb-3">
              A skilled Java developer with proven expertise in using new tools and technical developments
              to drive improvements throughout an entire software development lifecycle. Frontend enthusiast.
            </div>
            <a className="theme-btn-on-bg btn font-weight-bold theme-btn-cta" href="contact.html">Hire Me</a>

          </div>
        </div>
      </div>
    </div>
  )
}
