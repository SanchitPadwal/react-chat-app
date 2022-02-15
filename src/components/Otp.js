import { Grid, Paper, TextField, Avatar, Box ,Button  } from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 400,
    margin: "10px auto",
  };
  const avatarStyle = { backgroundColor: "#30b77c" };
  
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data= new FormData(e.currentTarget); 
    const actualData = {
      otp: data.get('otp')
    }
    if(actualData.otp.length > 6 || actualData.otp.length < 6)
    {
      alert("Wrong OTP Number");
    }
    else
    {

    navigate("/Chat");
      //console.log(actualData)
      document.getElementById('login-form').reset()

        }
  }

  return (
   
    <Grid  align="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h1>Verification</h1>
          <h4>You will get a OTP via SMS : </h4>
        </Grid>
        <Box component="form" novalidate sx={{mt : 1}} id="login-form" onSubmit={handleSubmit}>
        <TextField 
       
          margin="normal"
          variant="outlined"
          required
          fullwidth
          id="otp"
          name="otp"
          label="OTP Number"
        />
     
         <Box textAlign="center">
           <Button type="submit" variant="contained" sx={{mt:3 , mb:2 , px: 5}} >Verify</Button>
         </Box>
         </Box>  
      </Paper>
    </Grid>
  );
};

export default Otp;
