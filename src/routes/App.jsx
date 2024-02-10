import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/PostListProvider";

function App() {
  

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
