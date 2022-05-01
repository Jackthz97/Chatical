import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";

// export const Message = (props) =>{
//     return (
//       <div className="message-item">
//         <p>{props.senderName}</p>
//         <p>{props.time}</p>
//         <p>{props.text}</p>
//       </div>
//     );
// }
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
  export default function Message(props) {
    const messagesEndRef = React.createRef();
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [])

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
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, maxHeight: '100%', overflow: 'auto' }}
              >
                <TableCell component="th" scope="row">
                <p>{props.senderName} {props.time}</p>
                <p>{props.text}</p>
                </TableCell>
                {/* <TableCell align="left">{props.text}</TableCell> */}
                {/* <TableCell align="left">{props.time}</TableCell> */}
                {/* <TableCell align="right">{props.carbs}</TableCell>
                <TableCell align="right">{props.protein}</TableCell> */}
              </TableRow>
              <div ref={messagesEndRef} />
          </TableBody>
        </Table>
      </TableContainer>

    );
  }