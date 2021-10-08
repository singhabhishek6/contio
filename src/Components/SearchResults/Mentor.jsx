import { Rating } from "@mui/material";
import React, { useRef } from "react";
import { useParams } from "react-router";
import { MentorStyled } from "./MentorStyle";

export const Mentor = () => {
  const { id } = useParams();
  window.addEventListener("scroll", () => {
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
      </div>
    </MentorStyled>
  );
};
