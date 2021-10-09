import React from "react";
import styled from "styled-components";
import one from "../img/1.gif";
import two from "../img/2.gif";
import three from "../img/3.gif";

export const VideoBanner = () => {
  return (
    <Div>
      <h1>
        Learning Has never <br /> been this easy
      </h1>
      <ul className="steps">
        <li>
          <div className="step_text">
            <h3>1. Search</h3>
            <p>
              View the profiles freely and connect with your fantastic teacher
              according to your criteria (prices, diploma, reviews, classes at
              home or online)
            </p>
          </div>
          <img src={one} alt="" />
        </li>
        <li>
          <div className="step_text">
            <h3>2. Contact</h3>
            <p>
              Teachers will get back to you within hours! And if you can't find
              the perfect teacher, our team is here to help.
            </p>
          </div>
          <img src={two} alt="" />
        </li>
        <li>
          <div className="step_text">
            <h3>3. Organize</h3>
            <p>
              Freely schedule your classes with your teacher from the messaging
              platform.
            </p>
          </div>
          <img src={three} alt="" />
        </li>
      </ul>
    </Div>
  );
};

const Div = styled.div`
padding-bottom: 50px;
  background: rgb(189, 232, 222);
  background: linear-gradient(90deg, #97f8e2 0%, #e6e6e6 100%);
  h1 {
    text-align: center;
    margin: 0;
    padding-top: 100px;
  }
  .steps {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
      margin: 50px auto;
      .step_text{
        width: 40%;
        p{
            font-weight: 600;
        }
      }
      img{
          width: 40%;
          border-radius: 10px;
          box-shadow: 4px 4px 10px gray;
      }
      &:nth-child(even) {
          flex-direction: row-reverse;
      }
    }
  }
`;
