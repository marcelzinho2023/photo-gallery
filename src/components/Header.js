import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  background-color: #282c34;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #61dafb;
  }
`;

const LogoutButton = styled.button`
  background-color: #61dafb;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 15px;

  &:hover {
    background-color: #21a1f1;
  }
`;

export default function Header({ user, onLogout }) {
  return (
    <NavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/about">About</NavLink> {/* Adicionado o link para About */}
      {user ? (
        <>
          <span style={{ color: "white", marginLeft: "15px" }}>
            Hello, {user.username}
          </span>
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </NavBar>
  );
}
