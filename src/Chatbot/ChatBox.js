import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
// import "./ChatBox.css";

export const ChatBox = ({ text, username, handleTextChange }) => (
  <Div>
    <div className="row">
      {/* <h4 className="greetings">Hello, {username}</h4> */}
      <div className="chat">
        <input
          type="text"
          value={text}
          placeholder="Ask your doubts here..."
          className="form-control"
          onChange={handleTextChange}
          onKeyDown={handleTextChange}
        />
        <SendIcon />
      </div>
    </div>
  </Div>
);

const Div = styled.div`
  .chat {
    position: absolute;
    top: 634px;
    display: flex;
    background-color: #ccc;
    width: 70%;
    min-width: 300px;
    margin-left: 15%;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    input {
      border: none;
      outline: none;
      background-color: transparent;
      width: 100%;
    }
  }
`;
