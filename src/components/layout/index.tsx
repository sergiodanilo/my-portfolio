import React from "react";
import Menu from "../menu/InlineMenu";

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}