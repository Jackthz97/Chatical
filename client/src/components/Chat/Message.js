import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import { Avatar } from "@mui/material";

export default function Message(props) {
  const messagesEndRef = React.createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <TableContainer>
      <Table aria-label="simple table">
        {/* <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead> */}
        <TableBody>
          <TableRow
            key={props.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            <TableCell component="th" scope="row">
              <Grid container direction={'row'}>
                  <Grid item mr={2}>
              <Avatar src={props.img} alt={props.senderName}  sx={{ width: 55, height: 55, mt: 1.5}}/>
              </Grid>
              <Grid item >
                <Grid mt={2.5}>
                  {props.senderName} {props.time}
                </Grid>
                <span>{props.text}</span>
              </Grid>
              </Grid>
            </TableCell>
          </TableRow>
          <div ref={messagesEndRef} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
