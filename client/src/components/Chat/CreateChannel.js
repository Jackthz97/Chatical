import React from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const CreateChannel = (props) => {
  return (
    <Grid container>
      <Link to="/channel">

          Create Channel +

      </Link>
    </Grid>
  )
}
export default CreateChannel;