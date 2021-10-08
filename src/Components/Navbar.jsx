import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

export const Navbar = () => {
  return (
    <Nav>
      <img src={logo} alt="" />
      <div className="navbtns">
        <p>Become a Mentor</p>
        <p>Sign Up</p>
        <p>Log In</p>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 4px 10px gray;
  background: rgb(189, 232, 222);
  background: linear-gradient(
    90deg,
    #97f8e2 0%,
    rgba(255, 255, 255, 1) 100%
  );
  img {
    width: 50px;
    cursor: pointer;
  }
  .navbtns {
    display: flex;
    p {
      margin: 0 25px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
