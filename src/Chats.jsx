import React, { useRef, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { ChatEngine } from "react-chat-engine"
import { auth } from "./Firebase"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useAuth } from "./Contexts/AuthContext"
import axios from "axios"

function Chats() {
  const history = useHistory()
  const { user } = useAuth()
  console.log("user:", user)
  const [loading, setLoading] = useState(true)
  const handleLogout = async () => {
    await auth.signOut()

    history.push("/")
  }

  const getFile = async (url) => {
    const responsem = await fetch(url)
    const data = await responsem.blob()

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
  }

  useEffect(() => {
    if (!user) {
      history.push("/")
      return
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "c401778f-0338-42f1-96ac-0c5119902933",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        let formdata = new FormData()
        formdata.append("email", user.email)
        formdata.append("username", user.email)
        formdata.append("secret", user.uid)

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name)

          axios.post("http://localhost:1234/users", {
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL || "",
          })
          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": "3348e7f4-a1fa-42b2-a79f-935c5358a9e4",
              },
            })
            .then(() => {
              setLoading(false)
            })
            .catch((err) => {
              console.log("err:", err)
            })
        })
      })
  }, [user, history])

  if (!user || loading) return <img style={{position:"fixed",top:"50%",left:"40%"}} src="332.gif" alt="" />

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Contio</div>
        <div className="logout-tab" onClick={()=>{
          history.goBack()
        }}>
          Back
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="c401778f-0338-42f1-96ac-0c5119902933"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}

export default Chats
