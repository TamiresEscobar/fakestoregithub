import React from "react";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import './style.css'
const MyFavorites = () => {
  return (
    <Link to="/meus-favoritos" className="link_myFavorites">
      <div className="container__myFavorites_header">
        <VscHeartFilled size={20} className="icon__myFavorites_header"/> 
        <span className="title__myFavorites_header">Meus Favoritos</span>
      </div>
    </Link>
  );
};

export default MyFavorites;
