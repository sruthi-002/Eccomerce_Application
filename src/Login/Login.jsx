import React from 'react'
import {Container} from '@mui/system'
import { Typography } from '@mui/material'
import {TextField} from '@mui/material'
import { FormLabel } from '@mui/material';
import { FormControl} from '@mui/base'
import { Button } from '@mui/material';
const Login = () => {
  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"center",backgroundColor:'-moz-initial'}}>
    <Container fixed sx={{height:'80vh',marginTop:'30px',width:'80vh',display:'flex',flex:'1',flexDirection:'row'}}>
        <br></br>
        <img src='login.png' height="586px" width="600px"></img>
        <Container fixed sx={{height:'586px', width:'100%',backgroundColor:'lavender', display:'flex',justifyContent:'center'}}>
            <div><Typography variant= 'h4' style={{fontFamily:'Roboto',textAlign:'center',marginTop:'180px'}}>LOGIN</Typography>
            <div>
                <br></br>
                <FormControl>
                    <FormLabel sx={{fontFamily:'Roboto',fontSize:'20px'}}>Enter Name</FormLabel>
                    <TextField sx={{marginLeft:'10px'}}></TextField>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button variant='contained' sx={{backgroundColor:'white' , color:'slateblue' ,marginLeft:'100px',":&hover":{backgroundColor:'slateblue',color:'white'},}}>Submit</Button>
                </FormControl>
            </div>
            </div>
        <div>
            
            </div>
            </Container>
    </Container>
    </div>
  )
}

export default Login
