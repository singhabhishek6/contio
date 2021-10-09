import axios from "axios"
import Pusher from "pusher-js"
import React, { useEffect, useState } from "react"
import styles from "./Chatbot.module.css"
function Chatbot() {
  const [message, setMessage] = useState("")
  const [username, setUsername] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    Pusher.logToConsole = true

    const pusher = new Pusher("8c79b67adca098eeafac", {
      cluster: "ap2",
    })

    var channel = pusher.subscribe("chat")
    channel.bind("message", function (data) {
      setMessages([...messages, data])
    })
  }, [])
  const handleSend = () => {
    axios
      .post("http://localhost:1234/api/messages", { username, message })
      .then(({ data }) => {
        setMessage("")
      })
  }
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className={styles.rootCont}>
        {messages.map((item) => {
          return (
            <div className={styles.messageCont}>
              <h3>{item.username}</h3>
              <p>{item.message}</p>
            </div>
          )
        })}
        <div className={styles.chatInput}>
          <input
            type="text"
            name=""
            id=""
            placeholder="write something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSend}>send</button>
        </div>
      </div>
    </>
  )
}

export default Chatbot
