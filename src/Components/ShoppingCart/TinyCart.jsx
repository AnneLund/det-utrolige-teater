import React from "react";
import styled from "styled-components";
import { useShoppingCardStore } from "./useShoppingCard";

const TinyCart = ({ price }) => {
  const { cartItems } = useShoppingCardStore();
  let subtotal = 0;
  cartItems.forEach((item) => (subtotal += price));
  return <span>{subtotal}</span>;
};

export default TinyCart;
