import React from "react";
import { Routes, Route } from "react-router-dom";
import ActorDetails from "../../Pages/Actors/ActorDetails";
import Actors from "../../Pages/Actors/Actors";
import EventDetails from "../../Pages/Events/EventDetails";
import Events from "../../Pages/Events/Events";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/actor/:id" element={<ActorDetails />} />
      <Route path="/events/:id" element={<EventDetails />} />
      {/* <Route path="/products" element={<Categories />}>
        <Route path="/products/:id" element={<Products />} />
      </Route>
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<ShoppingCart />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
