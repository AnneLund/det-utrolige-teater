import React from "react";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import Form from "./Form";
import { ReviewsContainer } from "./ReviewsContainer";
import { MdMessage } from "react-icons/md";
import Login from "../../../Pages/Login/Login";

//post af reviews

const Reviews = ({ eventID }) => {
  const { loggedIn } = useLoginStore();

  return (
    <ReviewsContainer>
      {loggedIn ? (
        <>
          <p>
            <span>
              <MdMessage size={30} />
            </span>
            Skriv en anmeldelse
          </p>

          <Form eventID={eventID.item.id} />
        </>
      ) : (
        <>
          <p>
            <span>
              <MdMessage size={30} />
            </span>
            Skriv en anmeldelse
          </p>
          <p>Du skal være logget ind for at skrive en anmeldelse</p>
          <Login />
        </>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
