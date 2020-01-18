import React from "react";
import { useSelector } from "react-redux";

import * as pages from "pages";
import { routeSel } from "modules/route";
import Navbar from "components/Navbar";

export default function PageSwitcher() {
  const route = useSelector(routeSel);
  const Page = pages[route];
  if (Page) {
    return (
      <React.Fragment>
        <Navbar />
        <Page />
      </React.Fragment>
    );
  }
  return <h1>Loading...</h1>;
}
