import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Rating } from "@mui/material";
import { useHistory } from "react-router";

export const MyCarousel = ({users,id}) => {
  const history = useHistory()
  return (
    <div className="CONTAINER_STYLE">
      <ReactCardCarousel
        spread={"wide"}
          autoplay={true}
        autoplay_speed={3000}
      >
        {users.map(el=>{
          return (
            <div className="cardStyle" >
          <img
            src={`https://joeschmoe.io/api/v1/${el.name}`}
            alt=""
          />
          <div  className="asd">
            <h3 onClick={()=>{
                history.push(`/search/${id}/${el._id}`)
            }}> {el.name}</h3>
            <Rating name="read-only" value={el.teacher_review} readOnly />
            <div className="sdf"> 
           {
             el.proficiency.map(r=>{
                return <span>{r}</span>
              })
            }
           </div>
          </div>
        </div>
          )
        })}
      
      </ReactCardCarousel>
    </div>
  );
};
