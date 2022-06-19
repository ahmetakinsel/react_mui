import React from "react";
//import Button from "@mui/material/Button";
import { Button, TextField, Grid, Typography } from "@mui/material";

//Colors: #00203F, #ADEFD1,#FFFFFF

const StyleWithSxProp = () => {
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
          <Typography>Login X</Typography>
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

export default StyleWithSxProp;
