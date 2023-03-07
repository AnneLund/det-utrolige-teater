import React, { useState } from "react";
import styled from "styled-components";
import AppService from "../../Appservices/Appservice";
import { useForm } from "react-hook-form";
import useFlashMessageStore from "../../FlashMessages/useFlashMessageStore";
import { useModalStore } from "../../Modal/useModalStore";
import { useParams } from "react-router-dom";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import SendButton from "../Buttons/SendButton";

const MyForm = styled.form`
  display: flex;
  justify-content: space-between;

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

  .button {
    width: 10%;
    margin: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
  }
`;

export const Form = ({ isupdated, review }) => {
  console.log(isupdated);
  console.log(review);
  const { userInfo } = useLoginStore();
  const [reviewID, setReviewID] = useState(1);
  const { id } = useParams();
  const { setToggleModal } = useModalStore();
  const { setFlashMessage } = useFlashMessageStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isupdated ? { title: review.title, content: review.content } : {} });

  const onSubmit = async (data) => {
    const postData = {
      user_id: data.user_id,
      id: id,
      title: data.title,
      content: data.content,
    };

    const putData = {
      user_id: data.user_id,
      id: review.id,
      title: data.title,
      content: data.content,
    };

    try {
      if (isupdated === true) {
        const response = await AppService.Update("reviews", putData);
        if (response.status) {
          setFlashMessage("Opdateret!");
          setTimeout(() => {
            setToggleModal("none");
          }, 2000);
          reset();
        }
      } else if (isupdated === false) {
        const response = await AppService.Create("reviews", postData);
        if (response.status) {
          setReviewID(response.data.new_id);
          setFlashMessage("Sendt!");
          setTimeout(() => {
            setToggleModal("none");
          }, 2000);
          reset();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MyForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="hidden" {...register("id")} value={reviewID} />
        <input type="hidden" {...register("user_id")} value={userInfo.user_id} />

        {errors.title?.type === "required" && <p role="alert">Titlen er påkrævet</p>}
        <input type="text" {...register("title")} placeholder="Emne" />

        <textarea rows={5} {...register("content", { required: true })} id="content" placeholder="Kommentar" />
      </div>
      <div className="button">
        <SendButton type="submit">Send</SendButton>
      </div>
    </MyForm>
  );
};

export default Form;
