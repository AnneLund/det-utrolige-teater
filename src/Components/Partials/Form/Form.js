import React, { useState } from "react";
import AppService from "../../Appservices/Appservice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import { Counter } from "../Counter/Counter";
import SendButton from "../Buttons/SendButton";
import { useCustomInfoStore } from "../Shop/CustomerInfo/useCostumInfoStore";
import seats from "../../../Assets/Images/seats.svg";
import { MyForm } from "./FormStyled";

export const Form = ({ item }) => {
  const { userInfo } = useLoginStore();
  const [eventID, setEventID] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { increaseCustomInfo } = useCustomInfoStore();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  //Async post-function
  const onSubmit = async (data) => {
    //Data der postes til api'et
    const postData = {
      user_id: data.user_id,
      event_id: item.id,
      firstname: data.firstname,
      lastname: data.lastname,
      address: data.address,
      zipcode: data.zipcode,
      city: data.city,
      email: data.email,
    };

    //Opretter ny reservation og tilføjer kundens info(postdata) til localstorage vha zustand
    try {
      const response = await AppService.Create("reservations", postData);
      if (response.status) {
        setEventID(response.data.new_id);
        increaseCustomInfo(formData);
        navigate("/thankyou");
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MyForm onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("event_id")} value={eventID} />
        <input type="hidden" {...register("user_id")} value={userInfo.user_id} />

        <div className="form-element">
          <label>Fornavn</label>
          <input
            name="firstname"
            type="text"
            {...register("firstname", { required: true })}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          {errors.firstname?.type === "required" && <p role="alert">Fornavn er påkrævet</p>}
        </div>

        <div className="form-element">
          <label htmlFor="lastname">Efternavn</label>
          <input
            name="lastname"
            type="text"
            {...register("lastname", { required: true })}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          {errors.lastname?.type === "required" && <p role="alert">Efternavn er påkrævet</p>}
        </div>

        <div className="form-element">
          <label htmlFor="address">Vejnavn & Nr</label>
          <input
            name="address"
            type="text"
            {...register("address", { required: true })}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          {errors.address?.type === "required" && <p role="alert">Adresse er påkrævet</p>}
        </div>

        <div className="form-element">
          <label htmlFor="city">Postnummer & by</label>
          <input
            type="text"
            name="zipcodeCity"
            {...register("zipcodeCity", { required: true })}
            onChange={(e) => {
              const [zipcode, city] = e.target.value.split(" ");
              setValue("zipcode", zipcode);
              setValue("city", city);
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />

          {errors.city?.type === "required" && <p role="alert">Postnummer og by er påkrævet</p>}
        </div>

        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            {...register("email", { required: true })}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          {errors.email?.type === "required" && <p role="alert">Email er påkrævet</p>}
        </div>

        <Counter item={item} />

        <footer>
          <div>
            <h5>Friscenen</h5>
          </div>
          <img className="seats" src={seats} alt="seats" />
        </footer>
        <div className="button">
          <SendButton>Godkend bestilling</SendButton>
        </div>
      </MyForm>
    </>
  );
};

export default Form;
