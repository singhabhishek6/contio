import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

export const Navbar = () => {
  const [login, setLogin] = useState(true)
  const [signup, setSignup] = useState(false)
  return (
    <Nav>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <div className="navbtns">
        <p>Become a Mentor</p>
        <p>Messages</p>
        <p>Sign Up</p>
        <p>Log In</p>
      </div>
      {login && <div className="login">
          <div className="login_overlay">
            <h2>Log In</h2>
            <input type="email" name="email" id="email" placeholder="E-mail address" />
            <input type="password" name="pass" id="pass" placeholder="Password" />
            <div>Login</div>
          </div>
        </div>}
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
      margin: 0 15px;
      font-weight: 600;
      cursor: pointer;
      transition: 500ms;
      &:hover{
        transform: translateY(-6px);
        transition: 200ms;
      }
    }
  }
  .login{
    width: 99vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    .login_overlay{
      width: 450px;
      height: 520px;
      background-color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
