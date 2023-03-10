import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import AppService from "../../Appservices/Appservice";
import useGetListItemByEndPoint from "../../Hooks/useGetListItemsByEndPoint";
import { useShoppingCardStore } from "../../ShoppingCart/useShoppingCard";
import Rating from "../Rating";

const MyReviews = () => {
  const { userInfo, loggedIn, setLoggedIn } = useLoginStore();
  const { state: reviews } = useGetListItemByEndPoint("reviews");
  const { cartItems, setDeleteItem } = useShoppingCardStore;
  console.log(reviews);
  console.log(userInfo);
  const [deleted, setDeleted] = useState(false);
  return (
    <table>
      <thead>
        <tr>
          <th>Forestilling</th>
          <th>Emne</th>
          <th>Antal stjerner</th>
        </tr>
      </thead>
      <tbody>
        {reviews && reviews.items ? (
          <>
            {reviews.items.map((item) => {
              if (item.user_id.includes(userInfo.user_id)) {
                return (
                  <tr key={item.id}>
                    <td>{item.event_title}</td>
                    <td>{item.subject}</td>
                    <td>
                      <Rating value={item.num_stars} />
                    </td>

                    <td>
                      <button
                        className="delete"
                        value={item.id}
                        onClick={async () => {
                          const response = await AppService.Delete("reviews", item.id);
                          console.log(response);
                          setDeleted(!deleted);
                        }}>
                        <TiDeleteOutline size={20} />
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </>
        ) : (
          <tr>
            <td> Du har endnu ingen reservationer</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MyReviews;
