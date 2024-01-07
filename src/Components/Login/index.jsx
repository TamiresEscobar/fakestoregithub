import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <Link to="/login" className="link__myAccount">
      <div className="content_login_myAccount">
        <VscAccount size={20} />

        <div className="title_login_text">minha conta</div>
      </div>
      <div className="content_login_register">
        <div className="subtitle_login_text">ou cadastra-se</div>
      </div>
    </Link>
  );
};

export default Login;
