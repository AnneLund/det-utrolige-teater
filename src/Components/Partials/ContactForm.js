import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Count from "./Shop/Count";

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 2em;
  width: 70%;
  margin: 0 auto;

  input {
    width: max-content;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    width: 100%;
    padding-bottom: 2em;
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Fornavn</label>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <p>This field is required</p>}
      </div>

      <div>
        <label>Efternavn</label>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>This field is required</p>}
      </div>

      <div>
        <label>Vejnavn & Nr</label>
        <span>
          <input {...register("street", { required: true })} />
          {errors.lastName && <p>This field is required</p>}
          <input {...register("no", { required: true })} />
          {errors.lastName && <p>This field is required</p>}
        </span>
      </div>

      <div>
        <label>Postnummer & by</label>
        <span>
          <input {...register("zip", { required: true })} />
          {errors.lastName && <p>This field is required</p>}
          <input {...register("city", { required: true })} />
          {errors.lastName && <p>This field is required</p>}
        </span>
      </div>
      <Count />
    </FormStyled>
  );
};

export default ContactForm;
