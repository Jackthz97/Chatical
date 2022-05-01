import * as React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        krypto
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [error, setError] = useState("no");
  const [count, setCount] = useState(0);

  const handleError = () => {
    (count >= 100) ? setError('no') :
    error === "no" ? setError("yes") : setError("no");
    setCount((prev) => prev + 1)
    console.log("count", count)
  };

  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const values = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("data:", values);

    axios
      .put(`http://localhost:8080/user-data`, { data: values })
      .then((response) => {
        console.log("email:", response);
        console.log("password:", response.data.password);
        if (response.data.email && response.data.password) {
          localStorage.setItem("username", JSON.stringify(response.data));

          navigate("/chat");
        }
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={(count < 100 ) ? {
            backgroundImage: "url(/undraw_login_re_4vu2.svg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "1200px 900px",
            backgroundPosition: "center",
          } :
          {
            backgroundImage: "url(100+.gif)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "1200px 900px",
            backgroundPosition: "center",
          }
        }
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src="/KRYPTO_free-file.png" height="70" alt="logo"></img>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5 }}
            >
              <TextField
                sx={{ mt: 4, mb: 2 }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                color="primary"
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" color="error">
                      <EmailIcon
                        sx={{ color: "error", mr: 1, my: 0.5 }}
                        style={{ color: "#1976D2" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                sx={{ mt: 6, mb: 2 }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                variant="outlined"
                color="primary"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" color="primary">
                      <LockIcon
                        sx={{ color: "error", mr: 1, my: 0.5 }}
                        style={{ color: "#1976D2" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 5, mb: 2 }}
                size="large"
              >
                <IconButton
                  aria-label="fingerprint"
                  color="primary"
                  size="medium"
                >
                  <Fingerprint style={{ color: "white" }} />
                </IconButton>
                Sign In
              </Button>
              <Grid container sx={{ mt: 10 }}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    <Typography color="primary">Forgot password?</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={handleError} href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 8 }} />
            </Box>
            {error === "yes" ? (
              <Typography color={"red"}>
                lol you can't sign up silly 🤣
              </Typography>
            ) : (
              <>
              {((count % 10 === 0) && (count < 100) && (count > 0)) ? (
              <Typography color={"red"}>
                YO STOP!!!!!!!🤬🤬🤬
              </Typography>
            ) : (
              <div>{count >= 100 ? "You win 🏳️" : "."}</div>
            )}
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
