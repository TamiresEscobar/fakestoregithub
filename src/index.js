import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home_Page from "./PAGES/Home/Home";
import Meus_Favoritos_page from './PAGES/Meus_Favoritos/MyFavorites_Page';
import Register_login from './Components/CadastroLogin/Cadastro_Login';
import Login from './PAGES/Login_Page/Login_Page';
import Profile from './PAGES/Profile/Profile';
import "./Styles/styles_global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>

      <Routes>
          <Route exact path="/" element={<Home_Page  />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register_login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/meus-favoritos" element={<Meus_Favoritos_page/>} />


      </Routes>

      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
