import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import TextField from "@mui/material/TextField";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";

export const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [user, setUser] = useState(false);
  const [showlog, setShowlog] = useState(false);

  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbtns">
        {user && <p>Ask Doubts</p>}
        <p>Become a Mentor</p>
        <p>Messages</p>
        {!user && <p onClick={() => setSignup(true)}>Sign Up</p>}
        {!user && <p onClick={() => setLogin(true)}>Log In</p>}
        {user && (
          <div className="userDetails">
            <div
              onClick={() => setShowlog(!showlog)}
              onBlur={() => setShowlog(false)}
              className="user"
            >
              <p>Subham</p>
              <img src="https://joeschmoe.io/api/v1/abhi" alt="" />
            </div>
            <div
              style={{
                width: showlog && "180px",
                padding: showlog && "10px",
                transition: "500ms",
              }}
              className="logout"
            >
              <p onClick={() => setShowlog(false)}>My Dashboard</p>
              <p onClick={() => setShowlog(false)}>Class Requests</p>
              <p onClick={() => setShowlog(false)}>My Profile</p>
              <p
                onClick={() => {
                  setShowlog(false);
                  setUser(false);
                }}
              >
                Logout
              </p>
            </div>
          </div>
        )}
      </div>
      {login && (
        <div className="login">
          <div className="login_overlay">
            <div onClick={() => setLogin(false)} className="close">
              <CloseIcon />
            </div>
            <h2>Log In</h2>
            <TextField
              className="inputs"
              id="filled-basic"
              label="E-mail address"
              variant="filled"
            />
            <TextField
              className="inputs"
              id="filled-basic"
              label="Password"
              variant="filled"
            />
            <div
              onClick={() => {
                setUser(true);
                setLogin(false);
              }}
              className="loginbtn"
            >
              Login
            </div>
            <div className="fbgooglebtn">
              <div className="fb">
                <FacebookRoundedIcon />
                <div>Facebook</div>
              </div>
              <div className="google">
                <GoogleIcon />
                <div>Google</div>
              </div>
            </div>
            <h4>Don't have an account?</h4>
            <h4
              className="signup"
              onClick={() => {
                setLogin(false);
                setSignup(true);
              }}
            >
              Sign Up
            </h4>
            <h4>Forgot Password</h4>
          </div>
        </div>
      )}

      {signup && (
        <div className="login">
          <div className="signup_overlay">
            <div onClick={() => setSignup(false)} className="close">
              <CloseIcon />
            </div>
            <h2>Sign Up</h2>
            <div className="fbgooglebtn">
              <div className="fb">
                <FacebookRoundedIcon />
                <div>Register with Facebook</div>
              </div>
              <div className="google">
                <GoogleIcon />
                <div>Sign up with Google</div>
              </div>
              <div className="email">
                <MailIcon />
                <div>Registration by e-mail</div>
              </div>
            </div>
            <h4>
              You already have an account?{" "}
              <span
                onClick={() => {
                  setSignup(false);
                  setLogin(true);
                }}
              >
                Log in
              </span>
            </h4>
            <h4 className="tnc">
              On registering by email or Facebook, you accept our{" "}
              <span>legal terms & conditions.</span>
            </h4>
          </div>
        </div>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0px 4px 10px gray;
  background: rgb(189, 232, 222);
  background: linear-gradient(90deg, #97f8e2 0%, #e6e6e6 100%);
  img {
    width: 50px;
    cursor: pointer;
  }
  .navbtns {
    display: flex;
    align-items: center;
    p {
      margin: 0 15px;
      font-weight: 600;
      cursor: pointer;
      transition: 500ms;
      &:hover {
        transform: translateY(-2px);
        transition: 200ms;
        color: dodgerblue;
      }
    }
    .userDetails {
      position: relative;
      .user {
        display: flex;
        align-items: center;
        background-color: #ccc;
        padding: 10px;
        border-radius: 35px;
      }
      img {
        width: 30px;
        border-radius: 50%;
        box-shadow: 2px 2px 5px gray;
      }
      .logout {
        position: absolute;
        top: 60px;
        right: 0;
        background-color: #fff;
        overflow: hidden;
        width: 0px;
        padding: 0px;
        border-radius: 15px;
        box-shadow: 4px 4px 10px grey;
        p {
          padding: 15px;
        }
      }
    }
  }
  .login {
    width: 98.7vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    .signup_overlay {
      width: 520px;
      height: 450px;
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
      .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
      .fbgooglebtn {
        .fb,
        .google,
        .email {
          background-color: #fa6484;
          width: 320px;
          text-align: center;
          padding: 18px 0;
          margin-top: 10px;
          border-radius: 5px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            font-size: 20px;
            margin-right: 10px;
          }
        }
        .fb {
          background-color: #3b5998;
        }
        .google {
          background-color: #5d99fb;
        }
      }
      h4 {
        color: #333;
        margin: 0;
        margin-top: 25px;
        span {
          color: #fa6484;
          cursor: pointer;
        }
      }
      .tnc {
        padding: 0 80px;
        font-size: 14px;
        color: #999;
        font-weight: 500;
        text-align: center;
        span {
          color: #555;
          text-decoration: underline;
        }
      }
    }
    .login_overlay {
      width: 480px;
      height: 560px;
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
      .close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
      .inputs {
        margin: 5px;
        width: 320px;
        div::before {
          border-bottom: 0px;
          &:focus {
            border-bottom: 0px;
          }
        }
      }
      .loginbtn {
        background-color: #fa6484;
        width: 320px;
        text-align: center;
        padding: 15px 0;
        margin-top: 5px;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
      }
      .fbgooglebtn {
        display: flex;
        color: #fff;
        font-weight: 600;
        width: 320px;
        gap: 10px;
        margin-top: 10px;
        .fb {
          background-color: #3b5998;
          width: 50%;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          gap: 5px;
          svg {
            font-size: 20px;
          }
        }
        .google {
          background-color: #5d99fb;
          width: 50%;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          gap: 5px;
          svg {
            font-size: 20px;
          }
        }
      }
      h4 {
        margin: 0;
        margin-top: 30px;
      }
      .signup {
        margin: 0;
        color: #fa6484;
        cursor: pointer;
      }
    }
  }
`;
