import React, { useEffect, useState } from "react";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../Modal/useModalStore";
import Form from "./Form";
import { ReviewsContainer } from "./ReviewsContainer";
import { MdMessage } from "react-icons/md";
import Button from "../Buttons/ButtonOne";
import { Page } from "../../../Layout/Page";
import AppService from "../../Appservices/Appservice";
import useFlashMessageStore from "../../FlashMessages/useFlashMessageStore";
import Login from "../../../Pages/Login/Login";
import Rating from "../Rating";

const Reviews = ({ reviewID, isupdated }) => {
  const { userInfo, loggedIn, setLoggedIn } = useLoginStore();
  const [review, setReview] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  console.log(isupdated);
  const { setFlashMessage } = useFlashMessageStore();
  const { setModalPayload } = useModalStore();
  const updated = true;

  useEffect(() => {
    const renderComments = async () => {
      try {
        const response = await AppService.GetList("reviews");
        if (response.data) {
          setReview(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderComments();
  }, [deleted, reviewID]);

  // const [user, setUser] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (evt) => {
  //   const value = evt.target.value;
  //   setUser({
  //     ...user,
  //     [evt.target.name]: value,
  //   });
  // };

  return (
    <ReviewsContainer>
      {/* <table>
            <thead>
              <tr>
                <th>Titel</th>
                <th>Dato</th>
                <th>Handling</th>
              </tr>
            </thead>
            <tbody>
              {comments?.map((item) => {
                if (item.user_id.includes(userInfo.user_id)) {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.created_friendly}</td>
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
                            AppService.Delete("reviews", item.id);
                            setDeleted((prevDeleted) => !prevDeleted);
                          }}>
                          Slet
                        </button>
                      </td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table> */}
      {loggedIn ? (
        <>
          <p>
            <span>
              <MdMessage size={30} />
            </span>
            Skriv en anmeldelse
          </p>
          <p>
            Antal stjerner: <Rating />
          </p>
          <Form />
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
