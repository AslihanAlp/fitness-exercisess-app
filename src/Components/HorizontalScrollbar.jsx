import React, { useContext } from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => (
 
  <Swiper 
    
    breakpoints={{
    320:{
      slidesPerView:1,
      
    },
    740:{
      slidesPerView: 2,
      spaceBetween:20
    },
    1080:{
      spaceBetween:20,
      slidesPerView:3
    }
   
  }}
   
  className='react-horizontal-scrolling-menu--wrapper'>
    {data.map((item) => (
      <SwiperSlide 
      key={item.id || item}
      itemID={item.id || item}
      title={item.id || item}>
        {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </SwiperSlide>
    ))}
  </Swiper>
  
);

export default HorizontalScrollbar;



