import React from 'react';
import Header from "../../Header/Navbar";
import "./styles.css";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi2";

const Login_Page = () => {
    return (
        <div>
        <div>
          <Header />
        </div>
  
        <div className="container__login_user">
          <form action="" className="content__form_login_user">
        <div className='blocks_login'>
          <div className='content__form_infos_user_icon'><HiUserCircle size={50} color='#fff'/></div>


            <div className="content__form_infos_user">
              <label htmlFor="">Email</label>
              <input type="text" />
  
              <label htmlFor="">Senha</label>
              <input type="text" />
  
              <div className="container__btns__login">
                <Link to={"/profile"}>

                <button>Entrar</button>
                </Link>
  
                <Link to={"/register"}>
                  <button>Cadastrar</button>
                </Link>
              </div>
            </div>
        </div>

          </form>
        </div>
      </div>
    );
};

export default Login_Page;