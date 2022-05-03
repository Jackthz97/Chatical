import React from "react";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Tooltip } from "@mui/material";

export const Channel = (props) => {
  const click = () => {
    if (props.scroll === 'smooth'){
      props.setState({scroll: 'auto'})
    } 

    // props.setState({channel: null})
    // console.log("is channel null?", props.channel)

    props.onClick(props.id);
  };

  return (
    <div>
      <Button onClick={click}>
        <Tooltip title={props.name} placement="right-start" arrow>
          <Avatar>{props.name}</Avatar>
        </Tooltip>
      </Button>
      <p>Online: {props.participants}</p>
    </div>
  );
};
