import React from "react";
import {Grid}  from "@mui/material";
import Product from "./Product/Product";
import './product.css'
const Products =({products,onAddtoCart})=>{
    return(
        <Grid container  sx={{marginLeft:'auto',marginBottom:"10px",margin:"70px"}} spacing={4}>
            {products.map((pro)=>
            (
                <Grid item key={pro.id}>
                    <Product product={pro} onAddtoCart={onAddtoCart}/>
                </Grid>
            ))
            }
        </Grid>
    );
}
export default Products;