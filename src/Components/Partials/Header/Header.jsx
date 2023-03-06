import React, { useState } from "react";
import { MainNav, MainHeader, Hamburger, NavLink, Menu } from "./MainNav.styled";
import useIsOpenNavStore from "./useIsOpenNavStore";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import logo from "../../../Assets/Images/logo.svg";
import SearchBar from "../Searchbar/SearchBar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNavStore();
  const [shrinkHeader] = useState(false);
  const { setLoggedIn, loggedIn } = useLoginStore();
  const currentLocation = useLocation();

  console.log(currentLocation);

  return (
    <MainHeader>
      <MainNav shrinkHeader={shrinkHeader}>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <img src={logo} alt="logo" />

        <Menu roll isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <SearchBar />

          <div>
            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink to="/" style={currentLocation.pathname === "/" ? { color: `${(props) => props.theme.colors.primary}` } : { color: "#000000" }}>
                Forside
              </NavLink>
            </li>

            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to="/events"
                style={currentLocation.pathname === "/events" ? { color: `${(props) => props.theme.colors.primary}` } : { color: "#000000" }}>
                Forestillinger og events
              </NavLink>
            </li>

            <li onClick={() => setIsOpen(!isOpen)}>
              <NavLink
                to="/actors"
                style={currentLocation.pathname === "/actors" ? { color: `${(props) => props.theme.colors.primary}` } : { color: "#000000" }}>
                Skuespillere
              </NavLink>
            </li>

            {loggedIn ? (
              <>
                <li
                  onClick={() => {
                    setLoggedIn(false, "", "", "");
                  }}>
                  <NavLink>Log ud</NavLink>
                </li>
              </>
            ) : (
              <li onClick={() => setIsOpen(!isOpen)}>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </div>
        </Menu>
      </MainNav>
    </MainHeader>
  );
};

export default Header;
