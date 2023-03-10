import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppService from "../Appservices/Appservice";
import { useForm } from "react-hook-form";
import useFlashMessageStore from "../FlashMessages/useFlashMessageStore";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import { useShoppingCardStore } from "../ShoppingCart/useShoppingCard";
import { Counter } from "./Shop/CounterStyled";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import SendButton from "./Buttons/SendButton";
import { useCustomInfoStore } from "./Shop/CustomerInfo/useCostumInfoStore";
import seats from "../../Assets/Images/seats.svg";

const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  gap: 0.5em;
  position: relative;
  margin-bottom: 1em;

  .form-element {
    display: flex;
    justify-content: space-between;

    span {
      margin: 0;
    }

    label {
      text-transform: uppercase;
      width: 220px;
      text-align: right;
    }

    input {
      width: 100%;
      margin-left: 1em;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: column;

      label {
        width: 100%;
        text-align: left;
      }

      input {
        margin-left: 0;
      }
    }
  }

  .seats {
    height: 200px;
    width: 500px;
    border: none;
    object-fit: contain;
    aspect-ratio: 1/2;
    margin: 0 auto;
  }
`;

export const Form = ({ item }) => {
  const { userInfo } = useLoginStore();
  const [eventID, setEventID] = useState(1);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const { setFlashMessage } = useFlashMessageStore();
  const [formData, setFormData] = useState({});
  const { increaseCustomInfo, decreaseCustomInfo, customDetails } = useCustomInfoStore();
  const { increaseCartQuantity, decreaseCartQuantity, setEmptyCart, cartItems } = useShoppingCardStore();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
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

    try {
      const response = await AppService.Create("reservations", postData);
      if (response.status) {
        increaseCartQuantity(item.id, item.price, count, item.title, item.image, item.startdate, item.stage_name);
        setEventID(response.data.new_id);
        increaseCustomInfo(formData);
        setFlashMessage("Sendt!");
        setTimeout(() => {
          navigate(`/event/submit/${response.data.new_id}`);
        }, 2000);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (count === 0) {
      setEmptyCart();
    }
  }, [count]);

  let subtotal = 0;
  cartItems.forEach((item) => (subtotal += item.price * item.amount));

  console.log(formData);

  const returnAmount = (id) => {
    const itemAmount = cartItems.find((ci) => ci.id === id)?.amount;
    return itemAmount;
  };

  return (
    <>
      <MyForm onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("event_id")} value={eventID} />
        <input type="hidden" {...register("user_id")} value={userInfo.user_id} />
        <input type="hidden" {...register("seats")} value={count} />

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

        <picture>
          <img className="seats" src={seats} />
        </picture>

        <SendButton position={true}>Godkend bestilling</SendButton>
      </MyForm>
      <Counter>
        <h5>Antal:</h5>
        <div>
          <button onClick={() => increaseCartQuantity(item.id, item.price, 1, item.title, item.image, item.startdate, item.stage_name)}>
            <AiOutlinePlus size={20} />
          </button>

          <span>{returnAmount(item.id) > null ? <span>Antal: {returnAmount(item.id)}</span> : 0}</span>
          <button onClick={() => decreaseCartQuantity(item.id, item.price, 1, item.title, item.image, item.startdate, item.stage_name)}>
            <AiOutlineMinus size={20} />
          </button>
        </div>
        <footer>
          <h4>pris: {subtotal} DKK</h4>
          <p>Pris inkl. moms</p>
        </footer>
      </Counter>
    </>
  );
};

export default Form;
