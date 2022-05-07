import React from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from '@mui/material';

const CreateChannel = (props) => {
  return (
    <Grid container>
      <Link to="/channel">
        <Button>
          Create Channel +
        </Button>
      </Link>
    </Grid>
  )
}
export default CreateChannel;