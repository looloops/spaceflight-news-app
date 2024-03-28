import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import SelectedArticle from "./components/SelectedArticle";
import Article from "./interfaces/Article";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/article:id" element={<SelectedArticle />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
