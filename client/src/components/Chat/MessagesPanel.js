import React from "react";
import Message from "./Message";
import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

export const MessagesPanel = (props) => {
  const user = JSON.parse(localStorage.getItem("username"));
  const [state, setState] = useState({ input_value: "" });
  console.log("testetststtststs: ", props.msm)

  let prev;
  if (props.msm) {
    prev = props.msm.map((e) => {
      return (
        <>
          <Message
            key={e.user_id}
            senderName={e.name}
            text={e.text}
            time={e.time}
            date={e.date}
            img={e.img}
          />
        </>
      );
    })
  } if (!props.msm) {
    prev = (
      <div className="no-content-message">There is no messages to show</div>
    );
  }

  const send = (e) => {
    e.preventDefault();
    if (state.input_value && state.input_value != "") {
        props.onSendMessage(props.channel.id, state.input_value);
        setState({ input_value: "" });
    }
  };

  const handleInput = (e) => {
    setState({ input_value: e.target.value });
  };

  let list;
  if (props.channel && props.channel.messages) {
    list = props.channel.messages.map((m) => {
      return (
        <>
          <Message
            key={m.id}
            id={m.id}
            senderName={m.senderName}
            text={m.text}
            time={m.time}
            img={m.img}
          />
        </>
      );
    });
  } 
  return (
    <Grid container direction={"column"}>
      <Paper style={{ minHeight: "90vh", maxHeight: "90vh", overflow: "auto" }}>
        {prev}
        {list}
      </Paper>
      <Grid item display="flex" justifyContent="space-between" mt={2}>
        {props.channel && (
          <div>
            <Box component="form" onSubmit={send}>
              <Input
                style={{ width: "83vw", height: 40 }}
                type="text"
                onChange={handleInput}
                value={state.input_value}
                size="72"
                placeholder="Write your message here.."
                p="2"
                inputProps={{ style: { textAlign: "left" } }}
              />
            </Box>
          </div>
        )}
      </Grid>
    </Grid>
  );
};
