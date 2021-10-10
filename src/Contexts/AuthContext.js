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

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false)
      console.log(user)
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
            }).then(({data}) => setUser(data.user))
          }
          else {
            setUser(data.user)
          }
        })
    })
  }, [])

  const value = { user, setUser }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
