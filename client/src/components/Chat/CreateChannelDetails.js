import React from "react";
import { Paper, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function CreateChannelDetails(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [textColor, setTextColor] = useState("black");
  const user = JSON.parse(localStorage.getItem("username"));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (name && description && img) {
      const data = {
        name,
        description,
        img,
        userId: user.id
      }
      console.log("channel create stuff: ", data);
      axios.put('/create-channel', data)
      .then((res) => console.log("res.data: ", res));
    }
    setName("")
    setDescription("")
    setImg("")
  };
  const handelInput1 = (e) => {
    setName(e.target.value);
  };
  const handelInput2 = (e) => {
    setDescription(e.target.value);
  };
  const handelInput3 = (e) => {
    setImg(e.target.value);
  };
  const handleMode = () => {
    props.mode === "dark" ? props.setMode("light") : props.setMode("dark");
  };
  useEffect(() => {
    if (props.mode === "dark") {
      setTextColor("white");
    } else if (props.mode === "light") {
      setTextColor("black");
    }
  }, [props.mode]);
  return (
    <Grid container>
      <Grid item xs={2}>
        <Button onClick={handleMode}>{props.mode} mode</Button>
        <span>welcome back {user.name}</span>
        <Link
          to="/chat"
          style={{
            textDecoration: "none",
            color: textColor,
          }}
        >
          <Typography>Back to chat</Typography>
        </Link>
      </Grid>
      <Grid item xs={10}>
        <Paper
          style={{ minHeight: "90vh", maxHeight: "90vh", overflow: "auto" }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container direction={"column"}>
              <input
                type={"text"}
                placeholder={"Channel Name"}
                onChange={handelInput1}
                value={name}
              />
              <input
                type={"text"}
                placeholder={"Description"}
                onChange={handelInput2}
                value={description}
              />
              <input
                type={"text"}
                placeholder={"img"}
                onChange={handelInput3}
                value={img}
              />
              <button onClick={handleSubmit}> click </button>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
