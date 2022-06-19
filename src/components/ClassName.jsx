import React from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";

//Switch to nightmode
//Colors: #00203F, #ADEFD1,#FFFFFF

const StyleWithClassName = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        style={{
          width: "400px",
          height: "600px",
        }}
      >
        <Grid item>
          <Typography>Login</Typography>
        </Grid>
        <Grid item>
          <TextField variant="outlined"></TextField>
        </Grid>
        <Grid item>
          <TextField variant="outlined"></TextField>
        </Grid>
        <Grid item>
          <Button variant="contained">Sign In</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StyleWithClassName;
