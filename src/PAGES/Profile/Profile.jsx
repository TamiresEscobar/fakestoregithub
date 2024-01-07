import React from "react";
import Header from "../../Header/Navbar";
import "./styles.css";
import { Link } from "react-router-dom";

const Profile_Page = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="container__profile_page">
       aqui pagina de profile
      </div>
    </div>
  );
};

export default Profile_Page;
