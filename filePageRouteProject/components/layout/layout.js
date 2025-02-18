import React from "react";
import MainHeader from "./main-header";

export default function Layout(props) {
  return (
    <React.Fragment>
      <MainHeader />
      <mian>{props.children}</mian>
    </React.Fragment>
  );
}
