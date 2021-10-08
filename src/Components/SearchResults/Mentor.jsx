import { Rating } from "@mui/material";
import React, { useRef } from "react";
import { useParams } from "react-router";
import { MentorStyled } from "./MentorStyle";
import ReactCardCarousel from "react-card-carousel";
import { MyCarousel } from "./Carousel";

export const Mentor = () => {
  const { id } = useParams();
  const x=[1,1,1,1,1]
  window.addEventListener("scroll", () => {
      console.log("sad");
    document.querySelector(".profileInfo").classList.toggle("expand", window.scrollY);
    document.querySelector("img").classList.toggle("shrink", window.scrollY);
  });
  return (
    <MentorStyled>
      <div className="wrapper">
        <div className="profileInfo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU"
            alt=""
          />
          <div className="info">
            <div className="name">
              <h2>Sanjay</h2>
              <Rating name="read-only" value={2.5} readOnly />
            </div>
            <div className="chat">Chat</div>
          </div>
        </div>
        <div className="review">
          <div className="recDet">
          <span className="df">
            <span className="r">37 reviews on sanjay</span>
          
            <Rating name="read-only" value={2.5} readOnly />
            <span className="g">3/5</span>
            </span>
            <p>
              All our ratings are collected by us and are given in confidence,
              they correspond to a real experience.
            </p>
          </div>
          <ul>
            {
             x.map(el=>{
                 
            return <li>
               <span className="avtar">S</span>
               <span className="n">Saurav</span>
               <span>
                 Perfect! He is very good in teaching the concepts from basics
                 and my daughter finds his class interesting.
               </span>
             </li>
            }) 
}
          </ul>
        </div>
        <MyCarousel/>
      </div>
    </MentorStyled>
  );
};
