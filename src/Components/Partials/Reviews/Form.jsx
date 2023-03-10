import React, { useState } from "react";
import styled from "styled-components";
import AppService from "../../Appservices/Appservice";
import { useForm } from "react-hook-form";
import useFlashMessageStore from "../../FlashMessages/useFlashMessageStore";
import { useModalStore } from "../../Modal/useModalStore";
import { useParams } from "react-router-dom";
import SendButton from "../Buttons/SendButton";
import Rating from "../Rating";

const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  div {
    width: 100%;
  }

  textarea,
  input {
    border-radius: 5px;
    border: none;
    padding: 0.5em;
    margin: 0.5em 0;
    width: 100%;
    font-family: "Titillium Web", sans-serif;
    font-size: 1.3em;
  }

  .stars {
    display: flex;
    gap: 1em;
    align-items: center;
    width: 100%;
  }
`;

export const Form = () => {
  const [reviewID, setReviewID] = useState(1);
  const { id } = useParams();
  const { setToggleModal } = useModalStore();
  const { setFlashMessage } = useFlashMessageStore();
  const [rating, setRating] = useState(0); // Define a state variable to hold the rating value
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const postData = {
      event_id: id,
      subject: data.subject,
      comment: data.comment,
      num_stars: rating,
    };

    try {
      const response = await AppService.Create("reviews", postData);

      if (response.status) {
        setReviewID(response.data.new_id);
        setFlashMessage("Sendt!");
        setTimeout(() => {
          setToggleModal("none");
        }, 2000);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MyForm onSubmit={handleSubmit(onSubmit)}>
      <div className="stars">
        <p>Antal stjerner:</p>
        <Rating onRatingChange={setRating} />
      </div>

      <div>
        <input type="hidden" {...register("event_id")} value={reviewID} />

        <input type="text" {...register("subject")} placeholder="Emne" />
        {errors.subject?.type === "required" && <p role="alert">Emnet er påkrævet</p>}

        <textarea rows={5} {...register("comment", { required: true })} id="comment" placeholder="Kommentar" />
        {errors.comment?.type === "required" && <p role="alert">Feltet er påkrævet</p>}
      </div>
      <div className="button">
        <SendButton color={"primary"} type="submit">
          Send
        </SendButton>
      </div>
    </MyForm>
  );
};

export default Form;
