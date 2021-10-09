import axios from "axios"
import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router"
import { auth } from "../Firebase"

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      console.log(user)
      // if (user) history.push("/")
      axios
        .get(`http://localhost:1234/users/check?email=${user.email}`)
        .then(({ data }) => {
          if (data.user.length === 0) {
            axios.post("http://localhost:1234/users", {
              name: user.displayName,
              email: user.email,
              avatar: user.photoURL || "",
            })
          }
        })
    })
  }, [user])

  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
