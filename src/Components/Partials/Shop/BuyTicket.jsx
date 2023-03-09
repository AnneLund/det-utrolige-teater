import { useParams } from "react-router-dom";
import { Page } from "../../../Layout/Page";
import { Ticket } from "./Ticket";
import useGetListItemById from "../../Hooks/useGetListItemById";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AppService from "../../Appservices/Appservice";
import { useForm } from "react-hook-form";
import useFlashMessageStore from "../../FlashMessages/useFlashMessageStore";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import { useShoppingCardStore } from "../../ShoppingCart/useShoppingCard";
import { Counter } from "../Shop/CounterStyled";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import SendButton from "../Buttons/SendButton";
import ContactForm from "../ContactForm";
import { useCustomInfoStore } from "../Shop/CustomerInfo/useCostumInfoStore";

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

const BuyTicket = () => {
  const { userInfo } = useLoginStore();
  const [eventID, setEventID] = useState(1);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const { setFlashMessage } = useFlashMessageStore();

  const { id } = useParams();
  const { state: events } = useGetListItemById("events", id);

  console.log(events);
  return (
    <Page title="Køb billetter">
      {events && events.item ? (
        <Ticket>
          <picture>
            <img src={events.item.image} alt={events.item.title} />
          </picture>
          <figcaption>
            <header>
              <h1>Køb billet</h1>
            </header>

            <div className="location">
              <h4>{events.item.title}</h4>
              <h5>
                {events.item.stage_name}
                <span>
                  {new Date(events.item.startdate).toLocaleDateString("da-DK", { month: "long", day: "numeric" })}
                  &nbsp;
                </span>
                KL. {events.item.starttime}
              </h5>
            </div>

            {/* <MyForm onSubmit={handleSubmit(onSubmit)}>
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
            </MyForm> */}

            <ContactForm item={events.item} />
          </figcaption>
        </Ticket>
      ) : (
        <p>Indlæser..</p>
      )}
    </Page>
  );
};

export default BuyTicket;
