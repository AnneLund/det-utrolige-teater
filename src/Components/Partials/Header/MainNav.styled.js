import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainNav = styled.nav`
  display: flex;
  z-index: 800;
  height: 11vh;
  flex-wrap: wrap;
  padding: ${(props) => (props.shrinkHeader ? "0.2rem" : "1rem")} 2rem;
  transition: padding 500ms ease;
  position: relative;
  text-transform: uppercase;

  .burger {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: column;
      transition: max-height 0.3 ease-in;
      width: 100%;
      z-index: 50000;
      max-height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    }
  }

  img {
    width: 250px;
    position: absolute;
    left: 0;
    margin: 1em;
    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      width: 250px;
      top: 35%;
      left: 33%;
    }
  }

  li {
    list-style: none;
    &:last-of-type {
      margin-left: auto;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    padding: 0;
    display: flex;
    justify-content: flex-end;
    background-image: none;

    li {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    width: 100%;
    display: flex;
    flex-direction: flex-end;
  }
`;

export const MainHeader = styled.header`
  position: relative;
  grid-gap: 1em;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const Hamburger = styled.div`
  flex-direction: column;
  padding: 1.3em;
  cursor: pointer;
  span {
    height: 5px;
    width: 25px;
    background-color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 4px;
    border-radius: 5px;

    @media screen and (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      display: flex;
      height: 15px;
      width: 60px;
      margin-bottom: 7px;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    font-size: 2em;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.mobile.value}) {
    font-size: 3em;
  }
`;

export const Menu = styled.ul`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  margin-left: auto;
  margin-right: 50px;

  @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
    flex-direction: column;
    align-items: center;
    transition: 300ms ease-in;
    width: 100%;
    backdrop-filter: blur(20px);
    z-index: 50000;
    position: relative;
    margin: 4em 0 0 0;
    height: ${({ isOpen }) => (isOpen ? "200vh" : "0")};
  }

  div {
    display: flex;
    gap: 1.5em;
    @media (max-width: ${(props) => props.theme.breakPoints.tablet.value}) {
      flex-direction: column;
    }
  }
`;
