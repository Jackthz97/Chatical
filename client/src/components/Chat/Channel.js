import React from 'react';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { Tooltip } from '@mui/material';


export class Channel extends React.Component {

    click = () => {
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div>
                <Button onClick={this.click}>
                <Tooltip title={this.props.name} placement="right-start" arrow>
                <Avatar>{this.props.name}</Avatar>
                </Tooltip>
                </Button>
                <p>Online: {this.props.participants}</p>
            </div>
        )
    }
}