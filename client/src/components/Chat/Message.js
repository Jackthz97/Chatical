import React from "react";

export class Message extends React.Component {
  render() {
    return (
      <div className="message-item">
        <p>{this.props.senderName}</p>
        <p>{this.props.time}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
