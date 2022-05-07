import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CreateChannel = (props) => {
  const [textColor, setTextColor] = useState("black");
  useEffect(() => {
    if (props.mode === "dark") {
      setTextColor("white");
    } else if (props.mode === "light") {
      setTextColor("black");
    }
  }, [props.mode]);
  return (
    <Grid container>
      <Link
        to="/channel"
        style={{
          textDecoration: "none",
          color: textColor,
        }}
      >
        Create Channel +
      </Link>
    </Grid>
  );
};
export default CreateChannel;
