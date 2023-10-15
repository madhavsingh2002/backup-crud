import {
  TextField,
  Stack,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Util from "../Util";
import { apis, baseUrl } from "../Api.js";
import { Link } from "react-router-dom";
import login from "../assest/login1.png";
import Grid from "@mui/material/Grid";
import authimg from '../assest/auth-illustration.png'
import swal from "sweetalert";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}${apis.loginApi}`, {
        email,
        password,
      });
      if (res && res.data.success) {
        localStorage.setItem("loggedIn", true);
        navigate("/home");
      }
    } catch (err) {
      swal({
        text: "An error occurred. Please check your credentials; they may be incorrect.",
        icon: "error",
        button: "Ok",
      });
      console.log(err.response);
    }
  };

  return (
    <div>
      <Box
        component="main"
        sx={{
          display: "flex",
          flex: "1 1 auto",
        }}
      >
        <Grid container sx={{ flex: "1 1 auto" }}>
          <Grid
            xs={12}
            lg={6}
            sx={{
              backgroundColor: "background.paper",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              component="header"
              sx={{
                left: 0,
                p: 3,
                position: "fixed",
                top: 0,
                width: "100%",
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: "background.paper",
                flex: "1 1 auto",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: 550,
                  px: 3,
                  py: "100px",
                  width: "100%",
                }}
              >
                <div>
                  <Stack spacing={1} sx={{ mb: 3 }}>
                    <Typography variant="h4">Login</Typography>
                    <Typography color="text.secondary" variant="body2">
                      Don&apos;t have an account? &nbsp;
                      <Link
                        to="/register"
                        style={{ textDecoration: "none" }}
                        underline="hover"
                        variant="subtitle2"
                      >
                        Register
                      </Link>
                    </Typography>
                  </Stack>

                  <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        label="Email"
                        margin="normal"
                        fullWidth
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <TextField
                        label="Password"
                        margin="normal"
                        fullWidth
                        required
                        type="password"
                        inputProps={{ minLength: Util.eight }}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        type="submit"
                        variant="contained"
                      >
                        Login
                      </Button>
                    </Box>
                  </form>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              alignItems: "center",
              background:
                "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              "& img": {
                maxWidth: "100%",
              },
              height:'100vh'
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography
                align="center"
                color="inherit"
                sx={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  mb: 1,
                }}
                variant="h1"
              >
                Welcome to
                <Box component="a" sx={{ color: "#15B79E",marginLeft:'5px' }} target="_blank">
                   CRUD-App
                </Box>
              </Typography>
              <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
                A professional CRUD that comes with ready-to-use 
              </Typography>
              <img alt="" src={authimg} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Login;
