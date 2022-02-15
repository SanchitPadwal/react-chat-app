import { Grid, Paper, TextField, Avatar, Box ,Button  } from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
      mobile: data.get('mobile')
    }
    if( actualData.mobile.length < 10 || actualData.mobile.length > 10 )
    {
      alert("Wrong Mobile Number");
    }
    else
    {
    
    navigate("/Otp");
    //console.log(actualData)
    document.getElementById('login-form').reset()

        }
  }

  return (
   
    <Grid  align="center">
      <Paper elevation={15} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h1>Log In</h1>
          <h4>Enter Mobile Number : </h4>
        
        </Grid>
        
        <Box component="form" novalidate sx={{mt : 1}} id="login-form" onSubmit={handleSubmit}>
       
        <TextField 
       
          margin="normal"
          variant="outlined"
          required
          fullwidth
          id="mobile"
          name="mobile"
          label="Mobile Number"
        />
     
         <Box textAlign="center">
           <Button type="submit" variant="contained" sx={{mt:3 , mb:2 , px: 5}} >Log in</Button>
         </Box>
         </Box>  
      </Paper>
    </Grid>
  );
};

export default Login;
