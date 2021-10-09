import { Rating } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { MentorStyled } from "./MentorStyle";
import ReactCardCarousel from "react-card-carousel";
import { MyCarousel } from "./Carousel";
import axios from "axios";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer/Footer";

export const Mentor = () => {
  const { id } = useParams();
  const [user,setuser] = useState([])
  const [users,setusers] = useState([])
  const x=[1,1,1,1,1]

  useEffect(() => {
    axios(`http://localhost:1234/users/${id}`)
    .then(res=>{
        console.log(res);
        setuser(res.data.user)
    })
    axios("http://localhost:1234/users?data=css")
    .then(res=>{
        console.log(res);
        setusers(res.data.users)
    })
    
  }, [])

  window.addEventListener("scroll", () => {
      console.log("sad");
    document.querySelector(".profileInfo").classList.toggle("expand", window.scrollY);
    document.querySelector("img").classList.toggle("shrink", window.scrollY);
  });

  console.log(user.teacher_review);
  return (
    <>
    {/* <Navbar/> */}
    <MentorStyled>
      <div className="wrapper">
        <div className="profileInfo">
          <img
            src={`https://joeschmoe.io/api/v1/${user.name}`}
            alt=""
          />
          <div className="info">
            <div className="name">
              <h2>{user.name}</h2>
            <Rating name="read-only" value={user.teacher_review != undefined ?user.teacher_review:1} readOnly />
            {user.isOnline?<div className="status">
                <span style={{backgroundColor:"green"}} className="dot"></span>
                <span>Online</span>
              </div>:<div className="status">
                <span style={{backgroundColor:"red"}} className="dot"></span>
                <span>Offline</span>
              </div>}
            </div>
            <div className="chat">Chat</div>
          </div>
        </div>
        <div className="bio">
          <div className="left">
            <h3>Proficiency in</h3>
           <div>
           {
              user.proficiency!=undefined ? user.proficiency.map(r=>{
                return <span>{r}</span>
              }):null
            }
           </div>
          </div>
          <div className="right">
            <h3>Bio</h3>
            <p>{user.bio}</p>
            <h3>About</h3>
            <p>{user.about}</p>
          </div>
        </div>
        <div className="review">
          <div className="recDet">
          <span className="df">
            <span className="r">37 reviews on sanjay</span>
          
            <Rating name="read-only" value={user.teacher_review != undefined ?user.teacher_review:1} readOnly />
            <span className="g">{user.teacher_review}/5</span>
            </span>
            <p>
              All our ratings are collected by us and are given in confidence,
              they correspond to a real experience.
            </p>
          </div>
          <ul>
            {
             users.map(el=>{
                 
            return <li>
               <span className="avtar">{el.name[0]}</span>
               <span className="n">{el.name}</span>
               <span>
                 Perfect! He is very good in teaching the concepts from basics
                 and my daughter finds his class interesting.
               </span>
             </li>
            }) 
}
          </ul>
        </div>
        
        <h3 className="h">Similar Tech Mentors</h3>
          <MyCarousel users={users}/>
        
      </div>
    </MentorStyled>
    <Footer/>
    </>
  );
};
