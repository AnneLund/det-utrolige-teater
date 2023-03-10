import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useShoppingCardStore = create(
  persist(
    (set) => ({
      cartItems: [],

      setEmptyCart: () => set(() => ({ cartItems: [] })),
      setDeleteItem: (id) =>
        set((state) => ({
          cartItems: [
            ...state.cartItems.filter((item) => {
              return item.id !== id;
            }),
          ],
        })),

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
            //**if item exists by id, increase the amount */
            return {
              cartItems: state.cartItems.map((item) => {
                if (item.id === id) {
                  //**return the found item with the new value */
                  return {
                    ...item,
                    amount: item.amount + quantity || 1,
                  };
                } else {
                  //**else return the found item as it is */
                  return { ...item };
                }
              }),
            };
          }
        }),

      //**FUNTION START */

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
