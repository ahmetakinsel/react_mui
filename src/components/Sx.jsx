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
          display: "none",
          justifyContent: "center",
          flexDirection: "column",
          width: "375px",
          height: "667px",
          backgroundColor: "#ADEFD1",
        }}
      >
        <Grid item>
          <Typography>The Sx Prop</Typography>
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
