import React from "react";
import { Channel } from "./Channel";

export const ChannelList = (props) => {
  const handleClick = (id) => {
    props.onSelectChannel(id);
  };

  let list = (
    <div className="no-content-message">There is no channels to show</div>
  );
  if (props.channels && props.channels.map) {
    list = props.channels.map((c) => (
      <Channel
        key={c.id}
        id={c.id}
        name={c.name}
        participants={c.participants}
        onClick={handleClick}
        render={props.render}
        setState={props.setState}
      />
    ));
  }
  return <div className="channel-list">{list}</div>;
};
