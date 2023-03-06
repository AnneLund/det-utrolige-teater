import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <p>This field is required</p>}

      <label>Last Name</label>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>This field is required</p>}

      <label>Email</label>
      <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email?.type === "required" && <p>This field is required</p>}
      {errors.email?.type === "pattern" && <p>Please enter a valid email</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
