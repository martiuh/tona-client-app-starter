import React from "react";

import NavLink from "components/NavLink";
import { pages } from "routesMap";

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to={{ type: pages.HOME }}>Home</NavLink>
      </nav>
    </header>
  );
}
