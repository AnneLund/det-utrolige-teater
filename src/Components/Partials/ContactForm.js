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
      event_id: eventID,
      firstname: data.firstname,
      lastname: data.lastname,
      address: data.address,
      city: data.city,
      email: data.email,
      seats: data.seats[eventID],
    };

    try {
      const response = await AppService.Create("reservations", postData);
      console.log(response);
      if (response.status) {
        setEventID(response.data.new_id);

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

  const addClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
    increaseCartQuantity(item.id, item.price, 1, item.title, item.image, item.startdate, item.stage_name);
  };

  const removeClick = (event) => {
    event.preventDefault();
    if (count <= 0) {
      return;
    }
    decreaseCartQuantity(item.id, item.price, 1, item.title, item.image);
    setCount(count - 1);
  };

  useEffect(() => {
    if (count === 0) {
      setEmptyCart();
    }
  }, [count]);

  const handleCountChange = (event) => {
    const newCount = Number(event.target.value);
    setCount(newCount);
  };

  let subtotal = 0;
  cartItems.forEach((item) => (subtotal += item.price * item.amount));

  console.log(formData);
  return (
    <MyForm onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("event_id")} value={eventID} />
      <input type="hidden" {...register("user_id")} value={userInfo.user_id} />

      <div className="form-element">
        <label>Fornavn</label>
        <input
          name="firstname"
          onChange={(e) => setFormData({ ...formData, [e.target.firstname]: e.target.value })}
          type="text"
          {...register("firstname", { required: true })}
        />
        {errors.firstname?.type === "required" && <p role="alert">Fornavn er påkrævet</p>}
      </div>

      <div className="form-element">
        <label htmlFor="lastname">Efternavn</label>
        <input
          name="lastname"
          onChange={(e) => setFormData({ ...formData, [e.target.lastname]: e.target.value })}
          type="text"
          {...register("lastname", { required: true })}
        />
        {errors.lastname?.type === "required" && <p role="alert">Efternavn er påkrævet</p>}
      </div>

      <div className="form-element">
        <label htmlFor="address">Vejnavn & Nr</label>
        <input
          name="address"
          onChange={(e) => setFormData({ ...formData, [e.target.address]: e.target.value })}
          type="text"
          {...register("address", { required: true })}
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
            setFormData({ ...formData, [e.target.zipcodeCity]: e.target.value });
          }}
        />

        {errors.city?.type === "required" && <p role="alert">Postnummer og by er påkrævet</p>}
      </div>

      <div className="form-element">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setFormData({ ...formData, [e.target.email]: e.target.value })}
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && <p role="alert">Email er påkrævet</p>}
      </div>

      <Counter>
        <h5>Antal:</h5>
        <div>
          <button onClick={addClick}>
            <AiOutlinePlus size={20} />
          </button>
          <input type="number" {...register("seats")} value={count} onChange={handleCountChange} name="count" min="0" />
          <button onClick={removeClick}>
            <AiOutlineMinus size={20} />
          </button>
        </div>
        <footer>
          <h4>pris: {subtotal} DKK</h4>
          <p>Pris inkl. moms</p>
        </footer>
      </Counter>

      <SendButton position={true}>Godkend bestilling</SendButton>
    </MyForm>
  );
};

export default Form;
