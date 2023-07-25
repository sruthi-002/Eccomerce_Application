import React from 'react'
import { AppBar, Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import './App.css';
import { Link , useLocation} from 'react-router-dom';
import Slider from './Slider';
const Navbar = ({totalItems,onItems}) => {
    const location = useLocation();
  return (
    <div>
    <div className='appbar' >
      <Toolbar>
        <Typography component={Link} to="/" variant="h5" color='inherit'className='appbar'>
            <img src='logo.png' alt='Easy Buy' height='45px'></img><div className='title'>EasyBuy</div>
        </Typography>
        <div  className='appbar'></div>
      </Toolbar>
      <div className='end'>
            {location.pathname =="/" &&(
            <IconButton component={Link} to="/cart" aria-label='Show Cart Items' color="inherit" >
                <Badge badgeContent={totalItems} color="secondary"></Badge>
                <ShoppingCart/>
            </IconButton>)}
        </div>
    </div>   
    </div>
  )
}

export default Navbar
