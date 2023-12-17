import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home_Page from "./PAGES/Home/Home";
import "./Styles/styles_global.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home_Page />
    </QueryClientProvider>
  </React.StrictMode>
);
