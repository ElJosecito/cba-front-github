import React from "react";

//router
import { Route, Routes } from "react-router-dom";

//common components
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import HeroComponent from "../components/HeroComponent";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeroComponent/>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />

    </>
  );
}

export default Router;
