import React, { useEffect, useState } from "react";
import "./styles.css";
import { GoSearch } from "react-icons/go";
import MiniCart from "../miniCart/index";
import MyFavorites from "../MeusFavoritos/index";
import Login from "../Login/index";
import MenuCategory from "../CategoryMenu/index";
import { LiaStoreAltSolid } from "react-icons/lia";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from 'react-router-dom'
/* 
Componente renderiza nav bar com todas as funcionalidades.
*/
const NavBarDesk = () => {
  // fixa navBar ao rolar scrollY no navegador
  let oldScrollY = 120;
  const [direction, setDirection] = useState("container-navbar-desk");
  const [teste, setTeste] = useState("DepartmentNotScroll");

  const controlDirection = () => {
    const navBar__notHasScroll = "container-navbar-desk";
    const navBar_HasScroll = "container-navbar-desk-scrollY";

    const Department_HasScroll = "DepartmentHasScroll";
    const department_notScroll = "DepartmentNotScroll";

    if (window.scrollY > oldScrollY) {
      setDirection(navBar_HasScroll);
      setTeste(Department_HasScroll);
    } else {
      setDirection(navBar__notHasScroll);
      setTeste(department_notScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <div className={direction}>
      <section className="menu-deskt">
        <Link to="/" className="box-group-store">
          <LiaStoreAltSolid size={60} color="#6B256F" />
          
        </Link>
      </section>

      <section className={teste}>
        <div className="content__departmentNavBar">
          <span>
            <TiThMenuOutline />
          </span>
          <span>
            <MenuCategory />
          </span>
        </div>
      </section>

      <section className="search-contain">
        <div className="content__search">
          <input type="text" placeholder="O que você está procurando?" />
          <GoSearch size={24} />
        </div>
      </section>

      <section className="contain-group-options-header">
        <div className="user__option">
          <Login />
        </div>

        <div className="user__option">
          <MyFavorites />
        </div>

        <div className="Button__miniCart">
          <MiniCart />
          <span className="text__user__options_cart">Carrinho</span>
        </div>
      </section>
    </div>
  );
};

export default NavBarDesk;
