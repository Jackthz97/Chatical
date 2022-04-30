import React from "react";
import "./App.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Chat } from "./components/Chat/Chat";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={mode}>
        <Grid minHeight={1000}>
          <Chat mode={mode} setMode={setMode} />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
