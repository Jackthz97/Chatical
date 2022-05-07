import React from "react";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function CreateChannelDetails(props) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    if (name && description && img) {
      console.log("channel create stuff: ", name , description, img)
    }
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
  return (
    <Grid>
      <Paper style={{ minHeight: "90vh", maxHeight: "90vh", overflow: "auto" }}>
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
  );
}
