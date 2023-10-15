import { useState } from "react";
import {
  TextField,
  Stack,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

import Util from "../Util";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { apis, baseUrl } from "../Api.js";
import authImg from "../assest/auth-illustration.png";
import Grid from "@mui/material/Grid";
import swal from "sweetalert";

function Register() {
  const [fullName, setFullname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}${apis.registrationApi}`, {
        fullName,
        email,
        number,
        password,
      });
      if (res && res.data.success) {
        swal({
          text: "Successfully Registered.",
          icon: "success",
          button: "Ok",
        });
        navigate("/login");
      } else {
        console.log("erororororor");
      }
    } catch (err) {
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
                    <Typography variant="h4">Register</Typography>
                    <Typography color="text.secondary" variant="body2">
                      Already have a account &nbsp;
                      <Link
                        to="/login"
                        style={{ textDecoration: "none" }}
                        underline="hover"
                        variant="subtitle2"
                      >
                        Login
                      </Link>
                    </Typography>
                  </Stack>

                  <form
                    onSubmit={handleSubmit}
                  >
                    <Stack spacing={3}>
                      <TextField
                        label="Full Name"
                        margin="normal"
                        fullWidth
                        inputProps={{ minLength: Util.three }}
                        required
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                      {fullName.length > Util.zero && fullName.length < Util.three && (
                        <Alert severity="error">
                          Name should be more than 2 characters.
                        </Alert>
                      )}
                      <TextField
                        label="Contact Number"
                        margin="normal"
                        type="number"
                        fullWidth
                        required
                        inputProps={{
                          maxLength: Util.twelve,
                          minLength: Util.ten,
                          min: Util.zero,
                        }}
                        name="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />

                      {number.length > Util.zero &&
                        (number.length < Util.ten ||
                          number.length > Util.twelve ||
                          number < Util.zero) && (
                          <Alert severity="error">
                            Contact number should be between 10 to 12 digits and
                            non-negative.
                          </Alert>
                        )}
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
                      {email.length > Util.zero && !Util.emailRegex.test(email) && (
                        <Alert severity="error">Invalid email address.</Alert>
                      )}
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
                      {password.length > Util.zero &&
                        !Util.passwordRegex.test(password) && (
                          <Alert severity="error">
                            Password requirements: 8+ characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.
                          </Alert>
                        )}
                      <TextField
                        label="Confirm Password"
                        margin="normal"
                        fullWidth
                        required
                        type="password"
                        inputProps={{ minLength: Util.eight }}
                        error={password !== confirmPassword}
                        // helperText={
                        //   password !== confirmPassword && "Passwords do not match."
                        // }
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {password !== confirmPassword && (
                        <Alert severity="error">
                          Password and Confirm password should be same.
                        </Alert>
                      )}
                    </Stack>


                    <Button
                      fullWidth
                      size="large"
                      sx={{ mt: 3 }}
                      type="submit"
                      variant="contained"
                    >
                      Register
                    </Button>
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
              height: '100vh'
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
                Welcome to{" "}
                <Box component="a" sx={{ color: "#15B79E" }} target="_blank">
                  CRUD-App
                </Box>
              </Typography>
              <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
                A professional CRUD that comes with ready-to-use
              </Typography>
              <img alt="" src={authImg} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Register;
