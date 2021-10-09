import React, { useState } from "react";
import styled from "styled-components";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";

export const Banner = () => {
  const sub = [
    "html",
    "css",
    "physics",
    "chemistry",
    "history",
    "react",
    "react-dom",
    "redux",
    "material-ui",
    "nodejs",
    "maths",
    "javascript",
    "css",
    "redux",
    "vue",
    "angular",
    "mongoDB",
    "express",
    "mongoose"
  ];
  const [subject, setSubject] = useState("");
  const [debounce, setDebounce] = useState(false);

  const handleBlur = () => {
    console.log("Hello");
    setTimeout(() => {
      setDebounce(false);
    }, 500);
  };

  return (
    <Div>
      <div className="left">
        <h1>Find The</h1>
        <h1>Perfect Mentor</h1>
        <p>
          Choose from <span>10 million mentors</span>
        </p>
        <p>
          We understand the importance of approaching each work integrally and
          believe in the power of simple.
        </p>
        <div className="mentorSearch">
          <MenuBookOutlinedIcon />
          <input
            onFocus={() => setDebounce(true)}
            onBlur={handleBlur}
            type="text"
            name=""
            id=""
            placeholder="What do you want to learn?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Link
            style={{ textDecoration: "none" }}
            to={subject.length ? `/search/${subject}` : "/"}
          >
            <div style={{ cursor: subject.length ? "pointer" : "not-allowed" }}>
              Find Mentor
            </div>
          </Link>
        </div>
        <div
          style={{ display: debounce ? "block" : "none" }}
          className="debounce"
        >
          {sub
            .filter(
              (s) => s.toLowerCase().indexOf(subject.toLowerCase()) !== -1
            )
            .map((e, idx) => {
              return (
                <div
                  key={idx}
                  className="debounce_res"
                  onClick={() => setSubject(e.toUpperCase())}
                >
                  {e}
                </div>
              );
            })}
        </div>
      </div>
      <div className="right">
        <img
          src="https://demo.bravisthemes.com/wellco/wp-content/uploads/2021/09/slider-image2.png"
          alt=""
        />
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: rgb(189, 232, 222);
  background: linear-gradient(90deg, #97f8e2 0%, #e6e6e6 100%);
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    min-height: 0;
  }
  .left {
    width: 55%;
    padding-left: 150px;
    padding-right: 20px;
    position: relative;
    @media screen and (max-width: 1000px) {
      padding: 0px;
      width: 80%;
    }
    h1 {
      margin: 4px 0;
      font-size: 40px;
      font-family: sans-serif;
    }
    p {
      margin: 10px 0;
      font-weight: 600;
      span {
        color: dodgerblue;
      }
    }
    .mentorSearch {
      display: flex;
      align-items: center;
      background-color: #fff;
      padding: 10px;
      width: 70%;
      border-radius: 30px;
      margin-top: 40px;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
        width: 90%;
      }
      svg {
        color: #21d6c4;
      }
      input {
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        margin: 0 10px;
        font-size: 15px;
        @media screen and (max-width: 1000px) {
          text-align: center;
        }
      }
      div {
        background-color: #21d6c4;
        padding: 7px;
        margin: -5px;
        width: 150px;
        text-align: center;
        border-radius: 20px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: 300ms ease-in-out;
        &:hover {
          background-color: dodgerblue;
          transition: 300ms ease-in-out;
        }
        @media screen and (max-width: 1000px) {
          margin-top: 20px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .debounce {
      width: 200px;
      height: auto;
      max-height: 250px;
      background-color: #fff;
      position: absolute;
      margin-top: 20px;
      margin-left: 20px;
      border-radius: 20px;
      overflow: hidden;
      .debounce_res {
        margin: 10px;
        text-align: center;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
  .right {
    width: 45%;
    padding: 25px;
    @media screen and (max-width: 1000px) {
      /* margin-top: -100px; */
    }
    img {
      width: 100%;
    }
  }
`;
