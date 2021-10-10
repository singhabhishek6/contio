import axios from "axios"
import React, { useContext, useState, useEffect } from "react"
import { auth } from "../Firebase"
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const history = useHistory()
  const [uid,setUid] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false)
      // setUser(user)
      console.log(user.uid)
      setUid(user.uid)
      if (user === null ) {
        history.push("/")
        return;
      }
      axios
        .get(`http://localhost:1234/users/check?email=${user.email}`)
        .then(({ data }) => {
          if (data.user.length === 0) {
            axios.post("http://localhost:1234/users", {
              name: user.displayName,
              email: user.email,
              avatar: user.photoURL || "",
            })
            .then(({data}) => setUser(data.user)
                     )         }
          else {
            setUser(user)
          }
        })
    })
  }, [])

  const value = { user, setUser ,uid}

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
