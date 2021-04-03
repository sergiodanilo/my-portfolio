import * as React from "react"

import "../assets/sass/_styles.sass"
import Menu from "../components/Layout/Menu";
import AboutHeader from "../components/Layout/AboutHeader";
import Skills from "../components/Layout/Skills";

const IndexPage = () => {
  return (
    <>
      <Menu />
      <AboutHeader />
      <Skills />
    </>
  )
}

export default IndexPage
