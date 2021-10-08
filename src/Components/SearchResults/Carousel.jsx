import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Rating } from "@mui/material";

export const MyCarousel = () => {
  return (
    <div className="CONTAINER_STYLE">
      <ReactCardCarousel
        spread={"wide"}
        //   autoplay={true}
        autoplay_speed={3000}
      >
        <div className="cardStyle">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU"
            alt=""
          />
          <div className="asd">
            <h3>Chandan Gupta</h3>
            <Rating name="read-only" value={2.5} readOnly />
          </div>
        </div>
        <div className="cardStyle">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU"
            alt=""
          />
          <div className="asd">
            <h3>Chandan Gupta</h3>
            <Rating name="read-only" value={2.5} readOnly />
          </div>
        </div>
        <div className="cardStyle">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU"
            alt=""
          />
          <div className="asd">
            <h3>Chandan Gupta</h3>
            <Rating name="read-only" value={2.5} readOnly />
          </div>
        </div>
        <div className="cardStyle">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU"
            alt=""
          />
          <div className="asd">
            <h3>Chandan Gupta</h3>
            <Rating name="read-only" value={2.5} readOnly />
          </div>
        </div>
        <div className="cardStyle">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU"
            alt=""
          />
          <div className="asd">
            <h3>Chandan Gupta</h3>
            <Rating name="read-only" value={2.5} readOnly />
          </div>
        </div>
      </ReactCardCarousel>
    </div>
  );
};
