import React from "react";
import { CounterStyled } from "./CounterStyled";
import { useShoppingCardStore } from "../Shop/useShoppingCard";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

//Counter funktion der tilføjer antal af billetter til localestorage

export const Counter = ({ item }) => {
  const { increaseCartQuantity, decreaseCartQuantity, cartItems } = useShoppingCardStore();

  // Ganger billettens pris med antal og tilføjer totalprisen til subtotal-variablen
  let subtotal = 0;
  cartItems.forEach((item) => (subtotal += item.price * item.amount));

  //Returnerer antallet af billetter
  const returnAmount = (id) => {
    const itemAmount = cartItems.find((ci) => ci.id === id)?.amount;
    return itemAmount;
  };

  return (
    <CounterStyled>
      <h5>Antal:</h5>
      <div>
        <button type="button" onClick={() => increaseCartQuantity(item.id, item.price, 1, item.title, item.image, item.startdate, item.stage_name)}>
          <AiOutlinePlus size={20} />
        </button>

        <span className="amount">{returnAmount(item.id) > null ? <span className="amount"> {returnAmount(item.id)}</span> : 0}</span>
        <button type="button" onClick={() => decreaseCartQuantity(item.id, item.price, 1, item.title, item.image, item.startdate, item.stage_name)}>
          <AiOutlineMinus size={20} />
        </button>
      </div>
      <footer>
        <h4>pris: {subtotal} DKK</h4>
        <p>Pris inkl. moms</p>
      </footer>
    </CounterStyled>
  );
};
