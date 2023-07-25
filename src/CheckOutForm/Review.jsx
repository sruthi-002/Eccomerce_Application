import React from 'react'
import { Typography,ListItem,List,ListItemText} from '@mui/material'
const Review = ({checkoutToken}) => {
    console.log(checkoutToken)
  return (
    <>
    <Typography style={{textAlign:"center"}}variant='h6' gutterBottom>Order Summary</Typography>
    <List disablePadding style={{textAlign:"left",marginLeft:"10px",height:"auto",width:"auto",marginRight:"10px"}}>
        {checkoutToken?.line_items?.map((product)=>
        (
            <ListItem style={{padding: "5px 0"}} key={product.name}>
                <ListItemText primary={product.name} secondary={`Quantity : ${product.quantity}`}/>
                <Typography variant="body1">{product.line_total.formatted_with_symbol}</Typography>
            </ListItem>
        ))}
        <ListItem style={{padding: "5px 0"}} >
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" style={{fontWeight:700}}>
                    {checkoutToken?.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
    </List>
    </>
  )
}

export default Review
