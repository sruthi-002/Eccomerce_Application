import { Container, Typography,Button,Grid, cardActionAreaClasses,CircularProgress,Box} from '@mui/material'
import React from 'react'
import './cart.css'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'
      const Cart = ({cart,handleUpdateCartQuantity,handleRemoveCart,handleEmptyCartItem}) => {
        console.log(cart)
        if(!cart?.line_items)
        return (
            <Box sx={{ display: 'flex' ,justifyContent: "center",
            alignItems: "center",marginTop:"30px"}}>
            <CircularProgress />
          </Box>)
        const i = cart.line_items.total_items
        console.log(i)
    const EmptyCart = ()=>{
        return(
            
        <Typography variant='subtitle1'>You have no items in the cart,<Link to='/'>Go and Add Products</Link></Typography>);
        
    };
    const FilledCart =()=>
    {
        return (
        <>
        <Grid container spacing={3}>
                {cart.line_items?.map((item)=>(
                    <Grid item  key={item.id} xs={12} sm={12} md={6} lg={4} >
                        <CartItem item={item} handleUpdateCartQuantity={handleUpdateCartQuantity}
      handleRemoveCart={ handleRemoveCart} />
                    </Grid>
                ))}
        </Grid>
        <></>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"1em",marginBottom:"1em"}}>
            <Typography  variant='h6'> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div >
                <Button  size="large" variant="contained" type="Button" sx={{backgroundColor:"white" ,color:"SlateBlue",marginRight:"20px","&:hover": {
    backgroundColor: "SlateBlue",color:"white"
  },}} onClick={handleEmptyCartItem}>Empty Button</Button>
                <Button component={Link} to="/Checkout" size="large" variant="contained" type="Button" sx={{backgroundColor:"white" ,color:"SlateBlue" ,"&:hover": {
    backgroundColor: "SlateBlue",color:"white"
  },}}>Checkout</Button>
            <div> </div></div>
        </div>
        </>);
        

    }
  return (
    <Container>
        <div />
        <br></br>
        <Typography classname="title" color="SlateBlue"variant='h4'sx={{fontStyle: 'italic'}} gutterBottom>Your Shopping Cart</Typography>
         {!cart?.line_items?.length ? <EmptyCart/>:<FilledCart/>}
    </Container>
  )
}

export default Cart
