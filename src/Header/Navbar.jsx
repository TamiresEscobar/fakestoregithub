import React from "react";
import NavBarDesk from "../Components/NavbarDeskt/NavBarDesk";
import "../Styles/global-components.css";
import NavDepartment from "../Components/NavDepartment";

const NavBar = () => {
  return (
    <div className="flex-layout-row">
      <NavBarDesk />
      <NavDepartment />
    </div>
  );
};

export default NavBar;
