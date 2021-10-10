import React from "react";
// import "./ChatList.css";
import styled from "styled-components";

export const ChatList = ({ chats }) => (
  <Div>
    <ul>
      {chats.map((chat) => {
        return (
          <div>
            <div className="chatMessage">
              <div key={chat.id} className="box">
                <img src={chat.username} alt="" />
                <p>{chat.message}</p>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  </Div>
);

const Div = styled.div`
  border: 2px solid #bbb;
  border-radius: 8px;
  width: 70%;
  min-width: 300px;
  margin: auto;
  height: 500px;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  .chatMessage {
    .box {
      background-color: dodgerblue;
      display: flex;
      align-items: center;
      width: 250px;
      padding: 5px;
      margin: 5px;
      color: white;
      font-weight: 600;
      border-radius: 10px;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 10px;
      }
    }
  }
`;
