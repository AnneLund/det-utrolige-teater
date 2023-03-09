import React, { useEffect, useState } from "react";
import AppService from "../../../Components/Appservices/Appservice";
import { useLoginStore } from "../../Login/useLoginStore";
import { AdminStyled } from "../AdminStyled";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Components/Partials/Buttons/ButtonOne";
import { TiDeleteOutline } from "react-icons/ti";
import { TiTicket } from "react-icons/ti";

const Reservations = ({ events }) => {
  const { userInfo, loggedIn, setLoggedIn } = useLoginStore();
  const [reservations, setReservations] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const renderReservations = async () => {
      try {
        const response = await AppService.GetList("reservations", id);
        if (response.data) {
          setReservations(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderReservations();
  }, [deleted, id]);

  let reservedEvents = reservations?.map((reservation) => {
    const event = events.find((event) => event.id === reservation.event_id);
    return {
      ...event,
      reservation_id: reservation.id,
    };
  });

  return (
    <AdminStyled>
      <article>
        <h1>Min side</h1>
        <h3>
          <span>
            <TiTicket size={40} />
          </span>
          Mine reservationer
        </h3>
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
              {reservations && reservedEvents ? (
                <>
                  {reservedEvents?.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.startdate}</td>
                        <td>{item.title}</td>
                        <td>{item.stage_name}</td>
                        <td>{item.amount}</td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            className="delete"
                            value={item.id}
                            onClick={async () => {
                              const response = await AppService.Delete("reservations", item.reservation_id);
                              console.log(response);
                              setDeleted(!deleted);
                            }}>
                            <TiDeleteOutline size={20} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <tr>
                  <th> Du har endnu ingen reservationer..</th>
                </tr>
              )}
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
            <Button logout={true}>Log ud</Button>
          </li>
        ) : null}
      </div>
    </AdminStyled>
  );
};

export default Reservations;
