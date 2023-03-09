import { Page } from "../../Layout/Page";
import React, { useState, useMemo } from "react";
import AppService from "../../Components/Appservices/Appservice";
import Reservations from "./Reservations/Reservations";

const Admin = () => {
  const [events, setEvents] = useState([]);

  useMemo(() => {
    const renderEvents = async () => {
      try {
        const response = await AppService.GetList("events");
        if (response.data) {
          setEvents(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderEvents();
  }, []);

  // const handleDeleteClick = async (homeId, address) => {
  //   const response = await AppService.Delete("favorites", homeId);
  //   if (response.data) {
  //     setFlashMessage(`${address} er nu fjernet fra dine favoritter!`);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 2000);
  //   }
  // };

  return (
    <Page title="Administration">
      <Reservations events={events} />
      {/* <div className="buttons">
        <Button
          onClick={() =>
            setModalPayload(
              <SendReview>
                <h2>Skriv en ny anmeldelse</h2>
                <Form isupdated={updated} />
              </SendReview>
            )
          }>
          Skriv en ny anmeldelse
        </Button>

        <Button
          onClick={() =>
            setModalPayload(
              <MyFavorites>
                <h2>Din favoritliste</h2>
                <ul>
                  {favorites > [0] ? (
                    <>
                      {favorites.map((fav, i) => (
                        <li key={i}>
                          <figure>
                            <figcaption>
                              <p>{fav.address}</p>
                            </figcaption>
                            <img src={fav.images[0].filename.medium} alt={fav.address} />
                            <button className="delete" value={fav.home_id} onClick={() => handleDeleteClick(fav.home_id, fav.address)}>
                              Slet
                            </button>
                          </figure>
                        </li>
                      ))}
                    </>
                  ) : (
                    <p>Du har endnu ikke tilføjet nogle favoritter..</p>
                  )}
                </ul>
              </MyFavorites>
            )
          }>
          Se og ret dine favoritter
        </Button>
      </div> */}
    </Page>
  );
};

export default Admin;
