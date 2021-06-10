import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function AboutHeader() {

  return (
    <div className="header-intro theme-bg-primary text-white py-5">
      <div className="container">
        <div className="profile-teaser media flex-column flex-md-row">
          <StaticImage
            src="../../assets/images/profile.png"
            className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
            alt="Profile"
          />
          <div className="media-body text-center text-md-left">
            <div className="lead">Hello, my name is</div>
            <h2 className="mt-0 display-4 font-weight-bold">Sérgio Holanda</h2>
            <div className="bio mb-3">
              A skilled Java developer with proven expertise in using new tools and technical developments
              to drive improvements throughout an entire software development lifecycle. Frontend enthusiast.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
