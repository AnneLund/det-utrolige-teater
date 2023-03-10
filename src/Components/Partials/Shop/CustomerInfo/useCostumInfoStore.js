import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export const useCustomInfoStore = create(
  persist(
    (set) => ({
      customID: uuidv4(),
      customDetails: [],

      setEmptyCustumInfo: () => set(() => ({ customDetails: [] })),
      setDeleteCustomInfo: (id) =>
        set((state) => ({
          customDetails: [
            ...state.customDetails.filter((detail) => {
              return detail.id !== id;
            }),
          ],
        })),

      increaseCustomInfo: (id, firstname, lastname, address, zipcode, city, email, count) =>
        set((state) => {
          if (state.customDetails.find((detail) => detail.id === id) == null) {
            return {
              customDetails: [
                ...state.customDetails,
                { id: id, firstname: firstname, lastname: lastname, address: address, zipcode: zipcode, city: city, email: email, count: count },
              ],
            };
          } else {
            //**if detail exists by id, increase the amount */
            return {
              customDetails: state.customDetails.map((detail) => {
                if (detail.id === id) {
                  //**return the found detail with the new value */
                  return {
                    ...detail,
                  };
                } else {
                  //**else return the found detail as it is */
                  return { ...detail };
                }
              }),
            };
          }
        }),

      //**FUNTION START */

      decreaseCustomInfo: (id, firstname, lastname, address, zipcode, city, email, count) =>
        set((state) => {
          if (state.customDetails.find((detail) => detail.id === id) == null) {
            return {
              customDetails: [
                ...state.customDetails,
                { id: id, firstname: firstname, lastname: lastname, address: address, zipcode: zipcode, city: city, email: email, count: count },
              ],
            };
          } else {
            //**if detail exists by id, increase the amount */
            return {
              customDetails: state.customDetails.map((detail) => {
                if (detail.id === id) {
                  //**return the found detail with the new value */
                  return {
                    ...detail,
                  };
                } else {
                  //**else return the found detail as it is */
                  return { ...detail };
                }
              }),
            };
          }
        }),

      //**FUNCTION END */
    }),
    { name: "CustomerInfo", storage: createJSONStorage(() => localStorage) }
  )
);
