import React from "react";
import NavBarDesk from "../Components/NavbarDeskt/NavBarDesk";
import "../Styles/global-components.css";
import NavDepartment from "../Components/NavDepartment";

const NavBar = () => {
  return (
    <div className="flex-layout-row">
      <img
        src="https://www.oneills.co.uk/content/dam/oneills/images/2023/christmas/hs-2023-christmas-phase1-drinkspackages-page-banner.gif.asset/1701264915836.gif"
        alt=""
      />
      <NavBarDesk />
      <NavDepartment />
    </div>
  );
};

export default NavBar;
