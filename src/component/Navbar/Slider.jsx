import React from 'react'
import { Container } from '@mui/system';
import { Typography} from '@mui/material';
import './Slider.css'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material';
const Slider = () => {
    var slider=[
    {
        image:"shoes.png",
        title:"Running Shoes"
    }
]
  return (
    <div style={{marginTop:"20px"}}>
        {slider.map((slide)=>
        {
            return(
                <div>
                    <div className='arrow'>
                    <div className='arrowLeft'>
                        <ArrowLeftOutlined/>
                    </div>
                    <div className='arrowRight'>
                        <ArrowRightOutlined/>
                    </div></div>
            <div className='slider'>
                <div className='imgcontainer'>
                  <img src={slide.image}></img>
                  </div>
                  <div className='infocontainer'>
            <Typography>{slide.title}</Typography></div>
            </div>
            </div>
            )
        })}
    </div>
  )
}

export default Slider
