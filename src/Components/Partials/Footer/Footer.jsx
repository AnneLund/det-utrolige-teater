import React from "react";
import { ImFacebook2, ImLinkedin, ImInstagram } from "react-icons/im";
import { MyFooter } from "./FooterStyled";

const Footer = () => {
  return (
    <MyFooter>
      <article>
        <h4>Adresse</h4>
        <ul>
          <li>Det utrolige teater</li>
          <li>Havnegade 901</li>
          <li>9000 Aalborg</li>
          <li>EAN 5798003279845</li>
          <li>CVR 1001 0012</li>
          <li className="map">Find vej på kort</li>
        </ul>
      </article>
      <article>
        <h4>Billetservice</h4>
        <ul>
          <li>Se åbningstider</li>
          <li>Billettelefon: +45 96 31 80 80</li>
          <li>billet@dut.dk</li>
        </ul>
        <h4>Administration</h4>
        <ul>
          <li>Telefon: +45 96 31 80 90</li>
          <li>adm@dut.dk</li>
        </ul>
      </article>

      <article>
        <h4>Praktisk info</h4>
        <ul>
          <li>Kontakt</li>
          <li>Kom trygt i teatret</li>
          <li>Presseside</li>
          <li>Skoleforestillinger</li>
          <li>Teatercaféen</li>
          <li>Handelsbetingelser</li>
        </ul>
      </article>
      <div>
        <ImFacebook2 size={40} />
        <ImInstagram size={40} />
        <ImLinkedin size={40} />
      </div>
    </MyFooter>
  );
};

export default Footer;
