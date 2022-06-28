import React from "react";
//import Button from "@mui/material/Button";
import { Button, TextField, Grid, Typography } from "@mui/material";

//Colors: #00203F, #ADEFD1,#FFFFFF

//Typography styles
// color: "#00203F",
// fontFamily: "Montserrat",
// fontWeight: "500",
// fontSize: "42px",
// letterSpacing: "2px",
// lineHeight: "44px",

//Button styles
// color: "#FFFFFF",
// width: "175px",
// height: "40px",
// fontSize: "20px",
// fontWeight: "800",
// borderRadius: "5px",
// fontFamily: "Montserrat",
// letterSpacing: "4px",
// backgroundColor: "#00203F",
// marginTop: "20px",

const Styling = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "375px",
          height: "667px",
          backgroundColor: "#ADEFD1",
        }}
      >
        <Grid item>
          <Typography>Styling Options</Typography>
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

export default Styling;
