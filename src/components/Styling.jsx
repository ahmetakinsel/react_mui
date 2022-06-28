import React from "react";
//import Button from "@mui/material/Button";
import { Button, TextField, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//Colors: #00203F, #ADEFD1,#FFFFFF

//Typography styles
// color: "#00203F",
// fontFamily: "Montserrat",
// fontWeight: "500",
// fontSize: "42px",
// letterSpacing: "2px",
// lineHeight: "44px",

const ButtonStyles = {
  color: "#FFFFFF",
  width: "175px",
  height: "40px",
  fontSize: "20px",
  fontWeight: "800",
  borderRadius: "5px",
  fontFamily: "Montserrat",
  letterSpacing: "4px",
  backgroundColor: "#00203F",
  marginTop: "20px",
};

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

const useStyles = makeStyles({
  "& .MuiOutlinedInput-root": {
    color: "red",
  },
});

const Styling = () => {
  const classes = useStyles();
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
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#00203F",
              fontFamily: "Montserrat",
              fontWeight: "500",
              fontSize: "42px",
              letterSpacing: "2px",
              lineHeight: "44px",
              textAlign: "center",
            }}
          >
            Styling Options
          </Typography>
        </Grid>
        <Grid item>
          <TextField variant="outlined" label="Sx Prop" cl></TextField>
        </Grid>
        <Grid item>
          <TextField variant="outlined" label="makeStyles"></TextField>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={ButtonStyles}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Styling;
