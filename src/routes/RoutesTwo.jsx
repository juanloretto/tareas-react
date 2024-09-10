import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsScreen from "../vistas/ProductsScreen";
import ContactScreen from "../vistas/ContactScreen";
import HomeScreen from "../vistas/HomeScreen";
import ErrorScreen from "../vistas/ErrorScreen";
import NavbarApp from "../components/NavbarApp";

const RoutesTwo = () => {
  return (
    <div>
        <NavbarApp/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="products" element={<ProductsScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </div>
  );
};

export default RoutesTwo;
