import React from 'react'
import { Typography,Button } from '@mui/material'
import {Link} from 'react-router-dom'
import { margin } from '@mui/system'
const Confirmation = () => {
  return (
    <div>
   <Typography style={{textAlign:"center"}} variant="h6" gutterBottom>Thanks for purchasing ...</Typography>
   <br></br>
   <Button sx={ {display:"flex",margin:"0 auto",width:"200px",backgroundColor:"white",color:"slateblue","&:hover":{
    color:"white",backgroundColor:"slateblue"
   },}} component={Link} to="/" variant="contained" >Go Back Home</Button><br></br>
   </div>
  )
}

export default Confirmation
