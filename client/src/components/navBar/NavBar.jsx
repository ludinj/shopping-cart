//styles

import {
  Wrapper,
  Logo,
  NavList,
  User,
  Avatar,
  UserModal,
} from "./navBar.styles";
import LogoImg from "../../img/logo.png";
import AvatarImg from "../../img/avatar-user.png";
import React, { useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
const NavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const avatarRef = useRef();
  useOnClickOutside(modalRef, avatarRef, () => setIsModalOpen(false));

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Wrapper>
      <Logo>
        <img src={LogoImg} alt="log-img" />
      </Logo>
      <NavList>
        <li>
          <h3>Products</h3>
        </li>

        <li>
          <h3>About</h3>
        </li>

        <li>
          <h3>Contact</h3>
        </li>
      </NavList>

      {user ? (
        <>
          <Avatar onClick={() => setIsModalOpen((pre) => !pre)} ref={avatarRef}>
            <img src={AvatarImg} alt="avatar img" />
          </Avatar>{" "}
          {isModalOpen && (
            <UserModal ref={modalRef}>
              <Link to="/profile">
                <span>My profile</span>
              </Link>
              <span onClick={handleLogout}>Log out</span>
            </UserModal>
          )}
        </>
      ) : (
        <User>
          <Link to="/login">Iniciar sesion</Link>
          <Link to="registro">Registrarce</Link>
        </User>
      )}
    </Wrapper>
  );
};

export default NavBar;
