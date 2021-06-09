import React from "react";
import Menu from "../menu/InlineMenu";

import "../../assets/sass/_styles.sass"

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}