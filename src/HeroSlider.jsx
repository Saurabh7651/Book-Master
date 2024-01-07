import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import Navbarsick from './Navbarsick';
const HeroSlider = () => {
  const settings = {
     dots: true,
     
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <Navbarsick/>
      <div className='card_f'>
        <div className='card_s'>
        <Slider {...settings} >
          {
            data.map((d)=>(
              <div className="card" style={{width: '18rem'}}>
  <img src={d.img} className="card-img-top " alt="..." style={{ width: '22.5rem', height: '18rem' }} />
  <div className="card-body">
    <h5 className="card-title">{d.name}</h5>
    <p className="card-text">Click on the below button to know about the subject of this course and best books for each courses which are available on internet </p>
    <NavLink to={d.src} className='btn btn-success'>Click Here</NavLink>
  </div>
</div>
            ))
          }
          </Slider>
        </div>
      </div> 
      <Contact/>
    </>
  );
};
const data=[
  {
    name:"Computer Science Engineering",
    img:"./Cse.jpg",
    src:"./computer"
   },
   {
    name:"Electronics and Communication Engineering",
    img:"./Ece.jpg",
    src:"./electronics"
   },
  {
  name:"Electrical Engineering",
  img:"./Electrical.jpg",
  src:"./electrical"
 },
 {
   name:"Mechanical Engineering",
   img:"./Mech.jpg",
   src:"./mechanical"
  },
  {
   name:"Civil Engineering",
   img:"./Civil.jpg",
   src:"./civil"
  },
  {
   name:"Chemical Engineering",
   img:"./chem.jpg",
   src:"./chemical"
  }
 
 ];
export default HeroSlider;
