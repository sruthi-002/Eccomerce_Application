import React from 'react';
import { Card,CardContent,CardMedia,Typography,CardActions,IconButton } from '@mui/material';
import {AddShoppingCart} from "@mui/icons-material";
const Product = ({product,onAddtoCart}) => {
  return (    
   <Card >
    <CardMedia image={product.image} title={product.name}></CardMedia>
    <CardContent> 
        <div >
        <img src={product.image.url} height={350} width={350}></img>  
        <Typography variant="h6" gutterBottom>
            {product.name}
        </Typography>
        <Typography variant="h6" >
            {product.price.formatted_with_symbol}
        </Typography>
        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
         </div>
    </CardContent>
    <div >
        <CardActions disableSpacing>
            <IconButton style={{color:"SlateBlue"}} aria-label='Add to cart' onClick={()=> onAddtoCart(product.id,1)}>
                <AddShoppingCart/>
            </IconButton>
        </CardActions></div>
   </Card>
  )
}
export default Product
