import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <Div>
      <div className="left">
        <h1>Find The</h1>
        <h1>Perfect Mentor</h1>
        <p>Choose from <span>10 million mentors</span></p>
        <p>We understand the importance of approaching each work integrally and believe in the power of simple.</p>
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
  background: rgb(189, 232, 222);
  background: linear-gradient(
    90deg,
    #97f8e2 0%,
    rgba(255, 255, 255, 1) 100%
  );
  .left {
    width: 55%;
    border: 1px solid red;
    padding-left: 100px;
    h1{
        margin: 10px 0;
    }
    p{
        margin: 10px 0;
        span{
            color: dodgerblue;
        }
    }
  }
  .right {
    width: 45%;
    padding: 25px;
    border: 1px solid blue;
    img {
      width: 100%;
    }
  }
`;
