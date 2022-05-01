import React from "react";
import { ChannelList } from "./ChannelList";
import "./chat.scss";
import { MessagesPanel } from "./MessagesPanel";
import socketClient from "socket.io-client";
import { Button, Grid } from "@mui/material";
import { Typography } from "@mui/material";
const SERVER = "http://127.0.0.1:8080";
export class Chat extends React.Component {
  state = {
    channels: null,
    socket: null,
    channel: null,
  };
  socket;
  componentDidMount() {
    this.loadChannels();
    this.configureSocket();
  }

  configureSocket = () => {
    var socket = socketClient(SERVER);
    socket.on("connection", () => {
      if (this.state.channel) {
        this.handleChannelSelect(this.state.channel.id);
      }
    });
    socket.on("channel", (channel) => {
      let channels = this.state.channels;
      channels.forEach((c) => {
        if (c.id === channel.id) {
          c.participants = channel.participants;
        }
      });
      this.setState({ channels });
    });
    socket.on("message", (message) => {
      let channels = this.state.channels;
      channels.forEach((c) => {
        if (c.id === message.channel_id) {
          if (!c.messages) {
            c.messages = [message];
          } else {
            c.messages.push(message);
          }
        }
      });
      this.setState({ channels });
    });
    this.socket = socket;
  };

  loadChannels = async () => {
    fetch("http://localhost:8080/getChannels").then(async (response) => {
      let data = await response.json();
      this.setState({ channels: data.channels });
    });
  };

  handleChannelSelect = (id) => {
    let channel = this.state.channels.find((c) => {
      return c.id === id;
    });
    this.setState({ channel });
    this.socket.emit("channel-join", id, (ack) => {});
  };

  handleSendMessage = (channel_id, text) => {
    const date = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const time = new Intl.DateTimeFormat("en-US", options).format(date);
    this.socket.emit("send-message", {
      channel_id,
      text,
      senderName: this.socket.id,
      time: time,
      id: Date.now(),
    });
  };
  handleMode = () => {
    this.props.mode === "dark"
      ? this.props.setMode("light")
      : this.props.setMode("dark");
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={2}>
        <Typography>
          <Button onClick={this.handleMode}>{this.props.mode} mode</Button>
        </Typography>
          <ChannelList
            channels={this.state.channels}
            onSelectChannel={this.handleChannelSelect}
          />
        </Grid>
        <Grid item width={'100%'} xs={10}>
          <MessagesPanel
            onSendMessage={this.handleSendMessage}
            channel={this.state.channel}
          />
        </Grid>
      </Grid>
    );
  }
}
