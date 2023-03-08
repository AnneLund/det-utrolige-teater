import React, { useEffect, useState } from "react";
import AppService from "../../../Components/Appservices/Appservice";
import { useLoginStore } from "../../Login/useLoginStore";
import { AdminStyled } from "../AdminStyled";
import Transitions from "../../../Styles/Transition";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../../Components/Modal/useModalStore";
import Form from "../../../Components/Partials/Form";
import styled from "styled-components";
import Button from "../../../Components/Partials/Buttons/ButtonOne";
import { useShoppingCardStore } from "../../../Components/ShoppingCart/useShoppingCard";
import { TiDeleteOutline } from "react-icons/ti";

const Table = styled.tr``;

const Reservations = ({ reviewID, isupdated }) => {
  const { userInfo, loggedIn, setLoggedIn } = useLoginStore();
  const [reservations, setReservations] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  // console.log(isupdated);
  const { setModalPayload } = useModalStore();
  const { cartItems, setDeleteItem } = useShoppingCardStore();
  const updated = true;

  console.log(reservations);

  useEffect(() => {
    const renderReservations = async () => {
      try {
        const response = await AppService.GetList("reservations");
        if (response.data) {
          setReservations(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderReservations();
  }, [deleted, reviewID]);

  return (
    <AdminStyled>
      <article>
        <h2>Min side</h2>
        <h3>Mine reservationer</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Dato & Tid</th>
                <th>Forestilling</th>
                <th>scene</th>
                <th>Antal</th>
                <th>Pris</th>
                <th>Rediger</th>
              </tr>
            </thead>
            <tbody>
              {/* {reservations?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.startdate}</td>
                    <td>{item.event_title}</td>
                    <td>{item.stage_name}</td>
                    <td>{item.amount}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          setModalPayload(<Form review={item} isupdated={updated} />);
                        }}>
                        Opdater
                      </button>
                      <button
                        className="delete"
                        value={item.id}
                        onClick={() => {
                          AppService.Delete("reservations", item.id);
                          setDeleteItem(item.id, () => {
                            setDeleted((prevDeleted) => !prevDeleted);
                          });
                        }}>
                        Slet
                      </button>
                    </td>
                  </tr>
                );
              })} */}

              {cartItems?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.startdate}</td>
                    <td>{item.title}</td>
                    <td>{item.stage_name}</td>
                    <td>{item.amount}</td>
                    <td>{item.price}</td>
                    <td>
                      {/* <button
                        onClick={() => {
                          setModalPayload(<Form review={item} isupdated={updated} />);
                        }}>
                        Opdater
                      </button> */}
                      <button
                        className="delete"
                        value={item.id}
                        onClick={() => {
                          AppService.Delete("reservations", item.id);
                          setDeleteItem(item.id, () => {
                            setDeleted((prevDeleted) => !prevDeleted);
                          });
                        }}>
                        <TiDeleteOutline size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </article>

      <div>
        <h4>Du er logget ind som {userInfo.firstname} </h4>
        {loggedIn ? (
          <li
            onClick={() => {
              setLoggedIn(false, "", "", "");
              navigate("/login");
            }}>
            <Button>Log ud</Button>
          </li>
        ) : null}
      </div>
    </AdminStyled>
  );
};

export default Reservations;
