import React, { useState } from "react";
import { MainNav, MainHeader, Hamburger, NavLink, Menu } from "./MainNav.styled";
import useIsOpenNavStore from "./useIsOpenNavStore";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import logo from "../../../Assets/Images/logo.svg";
import SearchBar from "../Searchbar/SearchBar";
import { useLocation } from "react-router-dom";
import OverLay from "../../../Pages/Login/Overlay";
import Home from "../../../Pages/Home";

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNavStore();
  const [shrinkHeader] = useState(false);
  const { setLoggedIn, loggedIn } = useLoginStore();
  const currentLocation = useLocation();

  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <MainHeader>
      <MainNav shrinkHeader={shrinkHeader}>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <SearchBar />
          <img src={logo} alt="logo" />
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
                <li>
                  <NavLink to="/admin">Min side</NavLink>
                </li>
              </>
            ) : (
              <li onClick={() => setIsOpen(!isOpen)}>
                <NavLink to="#">
                  <span onClick={handleButtonClick}>Login</span>
                </NavLink>
                {showOverlay ? <OverLay /> : null}
              </li>
            )}
          </div>
        </Menu>
      </MainNav>
    </MainHeader>
  );
};

export default Header;
