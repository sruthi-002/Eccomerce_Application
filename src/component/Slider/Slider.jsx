import React from 'react';
import {Carousel} from 'react-material-ui-carousel'
const images = [
    {image:"shoes.png"}
]
const Slider = () => {
  return (
    <Carousel>
        {
            images.map((item)=>
            {
                <img src={item.image}></img>
            })
        }
    </Carousel>
  )
}

export default Slider
