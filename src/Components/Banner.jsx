import React from "react";
import styled from "styled-components";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

export const Banner = () => {
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
          <input type="text" name="" id="" placeholder="What do you want to learn?" />
          <div>Find Mentor</div>
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
  background: linear-gradient(90deg, #97f8e2 0%, rgba(255, 255, 255, 1) 100%);
  .left {
    width: 55%;
    padding-left: 150px;
    padding-right: 20px;
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
    .mentorSearch{
      display: flex;
      align-items: center;
      background-color: #fff;
      padding: 10px;
      width: 400px;
      border-radius: 30px;
      margin-top: 40px;
      svg{
        color: #21d6c4;
      }
      input{
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        margin: 0 10px;
        font-size: 15px;
      }
      div{
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
        &:hover{
          background-color: dodgerblue;
          transition: 300ms ease-in-out;
        }
      }
    }
  }
  .right {
    width: 45%;
    padding: 25px;
    img {
      width: 100%;
    }
  }
`;
