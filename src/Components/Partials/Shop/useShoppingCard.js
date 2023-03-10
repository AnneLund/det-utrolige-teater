import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

//Zustand: funktionen gemmer billetterne i localstorage
export const useShoppingCardStore = create(
  persist(
    (set) => ({
      cartItems: [],

      //tømmer kurven
      setEmptyCart: () => set(() => ({ cartItems: [] })),

      //sletter item med specifikt id
      setDeleteItem: (id) =>
        set((state) => ({
          cartItems: [
            ...state.cartItems.filter((item) => {
              return item.id !== id;
            }),
          ],
        })),

      //tilføjer item med specifikt id hvis det ikke allerede eksisterer
      increaseCartQuantity: (id, price, quantity, title, image, startdate, stage_name) =>
        set((state) => {
          if (state.cartItems.find((item) => item.id === id) == null) {
            return {
              cartItems: [
                ...state.cartItems,
                { id: id, price: price, amount: 1 * quantity, title: title, image: image, startdate: startdate, stage_name: stage_name },
              ],
            };
          } else {
            return {
              cartItems: state.cartItems.map((item) => {
                if (item.id === id) {
                  // Hvis det eksisterer, tilføjer den 1 til amount
                  return {
                    ...item,
                    amount: item.amount + quantity || 1,
                  };
                } else {
                  //ellers returneres det som det er
                  return { ...item };
                }
              }),
            };
          }
        }),

      //**FUNKTION START */

      //sletter item

      decreaseCartQuantity: (id, price, quantity, title, image, startdate, stage_name) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item.id === id);
          if (existingItem) {
            // if item exists by id, decrease the amount
            const newAmount = existingItem.amount - quantity;
            if (newAmount <= 0) {
              // remove item if amount is zero or negative
              return {
                cartItems: state.cartItems.filter((item) => item.id !== id),
              };
            } else {
              // otherwise, update the item with the new amount
              return {
                cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, amount: newAmount } : item)),
              };
            }
          } else {
            // if item doesn't exist, add it with a default quantity of 1
            return {
              cartItems: [
                ...state.cartItems,
                {
                  id: id,
                  price: price,
                  amount: 1,
                  title: title,
                  image: image,
                  startdate: startdate,
                  stage_name: stage_name,
                },
              ],
            };
          }
        }),

      //**FUNCTION END */
    }),
    { name: "Cart", storage: createJSONStorage(() => localStorage) }
  )
);
