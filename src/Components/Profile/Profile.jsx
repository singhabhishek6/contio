import * as React from "react"
import { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios"
import { useHistory, useParams } from "react-router"
import { useEffect } from "react"
import styles from "./profile.module.css"
import Typography from "@mui/material/Typography"
import ProficienciesInputBox from "./ProficiencySelection"
import { Alert, Snackbar } from "@mui/material"

const theme = createTheme()

export default function Profile() {
    const history = useHistory()
    const { id } = useParams()
    const [payload, setPayload] = React.useState({
        name: "",
        age: "",
        email: "",
        bio: "",
        about: "",
        avatar: "",
    })

    const [selected, setSelected] = React.useState([])
    const profilePicRef = React.useRef(null)
    const [errModel, setErrModel] = useState(false)
    const [errMessege, setErrMessage] = useState("")
    const [alertType, setAlertType] = useState("success")

    const state1 = {
        vertical: "top",
        horizontal: "right",
    }
    const { vertical, horizontal } = state1

    useEffect(() => {
        if (id === undefined) {
            setPayload({
                name: "",
                age: "",
                email: "",
                bio: "",
                about: "",
                avatar: ""
            });

            const [selected, setSelected] = React.useState([]);
            const profilePicRef = React.useRef(null);
            const [errModel, setErrModel] = useState(false);
            const [errMessege, setErrMessage] = useState("");
            const [alertType, setAlertType] = useState("success");

            const state1 = {
                vertical: "top",
                horizontal: "right",
            }

            axios
                .get(`http://localhost:1234/users/${id}`)
                .then((res) => {
                    setPayload({
                        ...payload,
                        name: res.data.user.name,
                        age: res.data.user.age,
                        email: res.data.user.email,
                        bio: res.data.user.bio,
                        about: res.data.user.about,
                        avatar: res.data.user.avatar,
                    })
                })
                .catch((err) => {
                    console.log(err)
                });
                
        }, [id])

    const handlePatchStudent = () => {
        axios
            .patch(`http://localhost:1234/users/${id}`, payload)
            .then((res) => {
                handleAlert("Updated")
                history.push(`/profile/${id}`)
            })
            .catch((err) => {
                setAlertType("error")
                console.log(err)
            })
    }

    useEffect(() => {
        if (id === undefined) {
            setPayload({
                name: "",
                age: "",
                email: "",
                bio: "",
                about: "",
                avatar: ""
            })
            return;
        }

        axios.get(`http://localhost:1234/users/${id}`)
            .then((res) => {
                setPayload({
                    ...payload,
                    name: res.data.user.name,
                    age: res.data.user.age,
                    email: res.data.user.email,
                    bio: res.data.user.bio,
                    about: res.data.user.about,
                    avatar: res.data.user.avatar
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const handleFileSelection = () => {
        profilePicRef.current.click()
    }

    const handleAlert = (message) => {
        setErrMessage(message)
        setErrModel(true)
        setTimeout(() => {
            setErrModel(false)
            setAlertType("success")
        }, 2000)
    }

    return (
        <div className={styles.profileContainer}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        className={styles.formDiv}
                    >
                        <Typography component="h1" variant="h5">
                            {"Edit Profile Details"}
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                        name="name"
                                        required
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        id="Name"
                                        label="Name"
                                        type="text"
                                        value={payload.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                        name="age"
                                        required
                                        fullWidth
                                        id="age"
                                        label="Age"
                                        value={payload.age}
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                        required
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={payload.email}
                                        id="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                        fullWidth
                                        name="bio"
                                        label="Bio"
                                        type="bio"
                                        value={payload.bio}
                                        id="bio"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ProficienciesInputBox
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        name="about"
                                        label="About"
                                        type="about"
                                        value={payload.about}
                                        id="about"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                className={styles.submitBtn}
                            >
                                {"Update"}
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

            <ThemeProvider style={{ width: "50vw !important" }} theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        className={styles.formDiv}
                    >
                        <Typography component="h1" variant="h5">
                            {"Update Profile Photo"}
                        </Typography>

                        <img className={styles.profilePic} src={payload.avatar} alt="" />

                        <img className={styles.profilePic} src={payload.avatar} alt="" />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            className={styles.profilePicBtn}
                            onClick={handleFileSelection}
                        >
                            {"Upload New Photo"}
                        </Button>

                        <Typography component="h1" variant="h5">
                            {"Change Password"}
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="password"
                                        required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="new_password"
                                        required
                                        fullWidth
                                        id="New Password"
                                        label="New Password"
                                        type="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirm_password"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirm-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                className={styles.submitBtn}
                            >
                                {"Update"}
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

            <Snackbar
                open={errModel}
                anchorOrigin={{
                    vertical,
                    horizontal,
                }}
                key={vertical + horizontal}
            >
                <Alert severity={alertType} sx={{ width: "100%" }}>
                    {errMessege}
                </Alert>
            </Snackbar>
        </div>
    )
}
