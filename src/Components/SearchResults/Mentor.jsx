import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { MentorStyled } from "./MentorStyle";
import { MyCarousel } from "./Carousel";
import axios from "axios";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer/Footer";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useAuth } from "../../Contexts/AuthContext";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export const Mentor = () => {
  const { id } = useParams();
  const [user, setuser] = useState([]);
  const [users, setusers] = useState([]);
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [, setComments] = useState(-1);
  const [reviewText, setReviewText] = useState("");
  const [alertmsg, setAlertmsg] = useState(false);

  const history = useHistory();
  const x = useAuth();

  useEffect(() => {
    axios(`http://localhost:1234/users/${id}`).then((res) => {
      console.log(res);
      setuser(res.data.user);
    });
    axios("http://localhost:1234/users?data=css").then((res) => {
      console.log(res);
      setusers(res.data.users);
    });
    axios(`http://localhost:1234/reviews/${id}`).then((res) => {
      console.log(res);
      setComments(res.data.reviews);
    });
    window.addEventListener("scroll", () => {
      console.log("sad");
      document
        .querySelector(".profileInfo")
        ?.classList.toggle("expand", window.scrollY);
      document.querySelector(".bb")?.classList.toggle("shrink", window.scrollY);
    });
  }, [id]);

  const handleSubmit = () => {
    axios
      .post(`http://localhost:1234/reviews/${id}`, {
        description: reviewText,
        student_id: "616132d33b22b92c83ec93d8",
        rating: value,
      })
      .then((res) => {
        console.log(res);
        setReviewText("");
        setValue(0);
      });
  };

  console.log(x.user);
  return (
    <>
      <Navbar />
      <MentorStyled>
        {alertmsg && <div className="alert">Mentor is not available for video call</div>}
        <div className="wrapper">
          <div className="profileInfo">
            <img
              className="bb"
              src={user.avatar || `https://joeschmoe.io/api/v1/${user.name}`}
              alt=""
            />
            <div className="info">
              <div className="name">
                <h2>{user.name}</h2>
                <Rating
                  name="read-only"
                  value={
                    user.teacher_review !== undefined ? user.teacher_review : 1
                  }
                  readOnly
                />
                {user.isOnline ? (
                  <div className="status">
                    <span
                      style={{ backgroundColor: "green" }}
                      className="dot"
                    ></span>
                    <span>Online</span>
                  </div>
                ) : (
                  <div className="status">
                    <span
                      style={{ backgroundColor: "red" }}
                      className="dot"
                    ></span>
                    <span>Offline</span>
                  </div>
                )}
              </div>
              <div className="chatvideo">
                <div
                  onClick={() => {
                    history.push("/chats");
                  }}
                  className="chat"
                >
                  Start Chat
                </div>
                <div onClick={() => {
                  // alert("Mentor is not available for Video Call")
                  setAlertmsg(true)
                  setTimeout(() => {
                    setAlertmsg(false)
                  },800)
                }}className="chat">
                  Video Call
                </div>
              </div>
            </div>
          </div>
          <div className="bio">
            <div className="left">
              <h3>Proficiency in</h3>
              <div>
                {user.proficiency !== undefined
                  ? user.proficiency.map((r) => {
                      return <span>{r}</span>;
                    })
                  : null}
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

                <Rating
                  name="read-only"
                  value={
                    user.teacher_review !== undefined ? user.teacher_review : 1
                  }
                  readOnly
                />
                <span className="g">{user.teacher_review}/5</span>
              </span>
              <p>
                All our ratings are collected by us and are given in confidence,
                they correspond to a real experience.
              </p>
            </div>

            <div className="reviewBox">
              <input
                type="text"
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review.."
              />
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>

              <div className="chat1" onClick={handleSubmit}>
                Submit
              </div>
            </div>
            <ul>
              {users.map((el) => {
                return (
                  <li>
                    {/* <span className="avtar">{el.name[0]}</span> */}
                    <img className="avtar" src={`https://joeschmoe.io/api/v1/${el.name}`} alt="" />
                    <span className="n">{el.name}</span>
                    <span>
                      Perfect! He is very good in teaching the concepts from
                      basics and my daughter finds his class interesting.
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <h3 className="h">Similar Tech Mentors</h3>
          <MyCarousel users={users} />
        </div>
      </MentorStyled>
      <Footer />
    </>
  );
};
