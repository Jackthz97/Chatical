import React from "react";
import "./App.css";
import { useState } from "react";
import { Chat } from "./components/Chat/Chat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, common } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./hooks/userAuth";
import CreateChannelDetails from "./components/Chat/CreateChannelDetails";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: { main: "#1976d2" },
            background: {
              default: "#D6E8FA",
              paper: "#f8f8ff",
            },
            divider: common.black,
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            borderColor: { default: "#1976d2" },
          }
        : {
            // palette values for dark mode
            primary: { main: "#5E5F6E" },
            divider: common.white,
            background: {
              default: "#282928",
              paper: "rgb(75, 75, 75)",
            },
            text: {
              primary: "#fff",
              secondary: grey[100],
            },
          }),
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
      <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/" element={<ProtectedRoutes />}>
          <Route
              path="/chat"
              element={<Chat mode={mode} setMode={setMode} />}
            />
          <Route
              path="/channel"
              element={<CreateChannelDetails mode={mode} setMode={setMode} />}
            />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
