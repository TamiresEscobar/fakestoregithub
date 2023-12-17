import React from "react";

import { useQuery } from "react-query";
import BaseUrl from "../../config/API/API.js";
import MenuCategory from "../CategoryMenu/index.jsx";
import "./styles.css";
import { SlArrowDown } from "react-icons/sl";

const NavDepartment = () => {
  const { data, isLoading } = useQuery("NavDepartment", () => {
    return BaseUrl.get(`products/categories`).then((response) => response.data.slice(8,14)
    
    );
  });

  if (isLoading) {
    return <div className="loading position"></div>;
  }


  return (
    <div className="container__department-menu">
      <div className="CategoryMenu__navBar">
        <MenuCategory />
        <div className="icon-department-sl">
          <SlArrowDown />
        </div>
      </div>


      <div className="CategoryMenu__navOptions">
      <div className="group-nav-header">
            {data.map((item) => {
              return (
                <li className="list-nav-header">
                  {item.replace(/-/i, ' ')}

                </li>
              );
            })}
          </div>

      </div>


    </div>
  );
};
export default NavDepartment;
