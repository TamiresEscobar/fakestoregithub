import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home_Page from "./PAGES/Home/Home";
import Profile_Page from "./PAGES/Profile/Profile";
import Meus_Favoritos_page from './PAGES/Meus_Favoritos/MyFavorites_Page'
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

          <Route path="/profile" element={<Profile_Page/>} />

          <Route path="/meus-favoritos" element={<Meus_Favoritos_page/>} />
      </Routes>

      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
