import React, { useState } from 'react'
import { CardContent, Typography,CardActions,Card,CardMedia,Button } from '@mui/material'
import './cartitem.css'
const CartItem = ({item,handleUpdateCartQuantity,handleRemoveCart}) => {
    const isEmpty = (item.length)
    console.log(item.length)
    if(isEmpty)
    return (
        <div className='name'><br></br>Please wait ...</div>)
  return (
    <div>
                <Card className='root' >
                <CardMedia className='media'>
                <br></br>
                </CardMedia> 
                <CardContent sx={{marginLeft:"5px",marginRight:"5px"}}> 
                <img style={{objectFit:'contain',height: '300px',width: '300px'}}src={item.image.url}  height="300" width="auto" ></img>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">{item.line_total.formatted_with_symbol}</Typography>
             </CardContent>
             <CardActions sx={{display:"flex",justifyContent:'space-between'}}>
                <Button size="small" type="button" sx={{ color:'black'}} onClick={()=>handleUpdateCartQuantity(item.id,item.quantity-1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button size="small" type="button" sx={{color:"black"}} onClick={()=>handleUpdateCartQuantity(item.id,item.quantity+1)}>+</Button>
                <Button sx={{color:"SlateBlue",backgroundColor:"white","&:hover": {
                  backgroundColor: "SlateBlue",color:"white"
                },}}variant='contained' type="button" onClick={()=>handleRemoveCart(item.id)} >Remove</Button>
             </CardActions>
            </Card>
    </div>
  )
}
export default CartItem
