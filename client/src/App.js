import React from "react";
import "./App.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Chat } from "./components/Chat/Chat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, common } from "@mui/material/colors";
import { ScopedCssBaseline } from "@mui/material";
import { CssBaseline } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");
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
      {/* <ScopedCssBaseline enableColorScheme > */}
      <CssBaseline />
      <div className={mode}>
        <Grid>
          <Chat mode={mode} setMode={setMode} />
        </Grid>
      </div>
      {/* </ScopedCssBaseline> */}
    </ThemeProvider>
  );
}

export default App;
