import axios from "axios"
import Pusher from "pusher-js"
import React, { useEffect, useState } from "react"
import styles from "./Chatbot.module.css"
import { ChatList } from "./ChatList"
import { ChatBox } from "./ChatBox"
import { useAuth } from "../Contexts/AuthContext"
function Chatbot() {
  const { user } = useAuth()

  const [text, setText] = useState("")
  const [username, setUsername] = useState("")
  let [chats, setChats] = useState([])
  const handleTextChange = (e) => {
    if (e.keyCode === 13) {
      const payload = {
        username: username,
        message: text,
      }
      axios.post("http://localhost:1234/message", payload)
    } else {
      setText(e.target.value)
    }
  }
  useEffect(() => {
    setUsername(user.photoURL)
    const pusher = new Pusher("8c79b67adca098eeafac", {
      cluster: "ap2",
      encrypted: true,
    })
    const channel = pusher.subscribe("chat")
    channel.bind("message", (data) => {
      // console.log("data:", data)
      chats.push(data)
      setChats([...chats])
      // console.log(chats)
    })
  }, [])

  return (
    <div className={styles.doubtroom}>
      <h1 className={styles.title}>Welcome to Doubt Room</h1>

      <section>
        <ChatBox
          text={text}
          username={username}
          handleTextChange={handleTextChange}
        />
        <ChatList chats={chats} />
      </section>
    </div>
  )
}

export default Chatbot;
