import React from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//Colors: #00203F, #ADEFD1,#FFFFFF

/*

Tasks: 

Button styling
Focus and hover state of the label element
The input border, border focused and hover states.

*/

const buttonStyles = {
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
  //Using pseudo selectors:
  "&:hover": {
    backgroundColor: "#ADEFD1",
    color: "#00203F",
  },
};

const TextFieldStyle = {
  width: "275px",
  height: "50px",

  //INPUT
  //default text
  "& .MuiOutlinedInput-root": {
    //color: "#00203F",
    color: "yellow",

    // (focused)
    "&.Mui-focused fieldset": {
      // borderColor: "#00203F",
      borderColor: "red",
    },
  },
  //default border (!focused)
  //!root
  "& .MuiOutlinedInput-notchedOutline": {
    color: "red",
  },

  //The notched outline is a border around all sides of either a Text Field or Select component.
  // This is used for the Outlined variant of either a Text Field or Select.

  //hover
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
  },

  //LABEL

  //text color
  "& .MuiInputLabel-root": {
    color: "#00203F",
    fontSize: "14px",
  },

  //focused text color
  "& .MuiInputLabel-outlined .Mui-focused": {
    color: "#00203F",
  },
};

const useStyles = makeStyles({
  textField: {
    width: "275px",
    height: "50px",
    fontFamily: "Montserrat",
    letterSpacing: "-0.2px",

    "& .MuiOutlinedInput-root": {
      //clicked (focused) state
      color: "yellow",
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
    //default border
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },

    //label
    "& .MuiInputLabel-root": {
      color: "#00203F",
      fontSize: "14px",
    },
    //hover
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    //label focused
    "& .MuiInputLabel-outlined .Mui-focused": {
      color: "#00203F",
    },
  },

  header: {
    textTransform: "uppercase",
    fontWeight: "400",
    fontFamily: "Montserrat",
  },
});

const StylingOptions = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        className={classes.header}
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
          <Typography
            // As part of the prop, you can use any regular CSS too: child or pseudo-selectors,
            // media queries, raw CSS values, etc.
            sx={{
              color: "#00203F",
              fontFamily: "Montserrat",
              fontWeight: "500",
              fontSize: "42px",
              letterSpacing: "2px",
              lineHeight: "44px",
            }}
          >
            MUI Styling
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="CSS"
            className={classes.textField}
            sx={{
              width: "275px",
              height: "50px",
              color: "#fff",
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Spread"
            variant="outlined"
            sx={{
              ...TextFieldStyle,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "green",
              },
            }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" sx={buttonStyles}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StylingOptions;
