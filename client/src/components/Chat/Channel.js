import React from "react";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Tooltip } from "@mui/material";

export const Channel = (props) => {
  const click = () => {
    if (props.render) {
        props.setState({render: false})
      } else {
        props.setState({render: true})
      }
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
