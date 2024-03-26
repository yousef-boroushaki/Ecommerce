import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/index";
import Slidernav from "./Components/Navbar/Slidernav";
import LoginRegister from "./pages/LoginRegister";
import Home from "./pages/Home";
import Cart from "./pages/Cart/index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ShowNav from "./pages/ShowNav";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Shoes from "./pages/Shoes";
import Bag from "./pages/Bag";
import Belt from "./pages/Belt";
import Watch from "./pages/Watch";
import Sports from "./pages/Sports";
export default function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <ShowNav>
        <Navbar />
      </ShowNav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/shoes" element={<Shoes />} />
        <Route exact path="/bag" element={<Bag />} />
        <Route exact path="/belt" element={<Belt />} />
        <Route exact path="/watch" element={<Watch />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route
          path="/login-register"
          element={token ? <Navigate to={"/"}></Navigate> : <LoginRegister />}
        />
        <Route path="/shopingcard" element={<Cart />} />
        <Route path="/Product-details/:category/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
