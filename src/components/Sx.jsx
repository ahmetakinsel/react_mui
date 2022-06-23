import React from "react";
//import Button from "@mui/material/Button";
import { Button, TextField, Grid, Typography } from "@mui/material";

//Colors: #00203F, #ADEFD1,#FFFFFF

// olan satırlar phase 2
// /*  */ arasında olan satırlar phase 3

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

  //lines 32-36 and 88-91 choosing label element
  //Using pseudo selectors:
  "& label": { color: "#fff", fontSize: "16px" },

  "& .MuiInputLabel-root": {
    color: "#00203F",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#00203F",
    border: 2,
  },

  /* 
   "& .MuiInputLabel-outlined.Mui-focused": {
    color: "#00203F",
  },
  
  */
};
const StyleWithSxProp = () => {
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
            The Sx Prop
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="CSS"
            sx={{
              width: "275px",
              height: "50px",
              color: "#fff",
              //Using nested selector:
              "& .MuiOutlinedInput-root": {
                color: "#00203F",
                //default text
              },
              //   "& .MuiOutlinedInput-notchedOutline": {
              //     border: 2,
              //     borderColor: "#00203F",
              //   },
              //   "& label": { color: "#fff", fontSize: "16px" },
              //   "& .MuiInputLabel-root": {
              //     color: "#c01a1a",
              //   },

              /* 

              "& .MuiInputLabel-outlined.Mui-focused": {
                    color: "#c01a1a",
                },
            
               */
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Spread"
            variant="outlined"
            sx={{ ...TextFieldStyle }}
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

export default StyleWithSxProp;
