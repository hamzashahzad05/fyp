import React from 'react'
import Slider from "react-slick"; 
import sld1 from '../../assets/images/img1.png'
import sld2 from '../../assets/images/img2.png'
import sld3 from '../../assets/images/img3.png'
import sld4 from '../../assets/images/img4.png'
import yello from '../../assets/images/yellowlogo.png'
import trending_headimg from "../../assets/images/head_img.png";
import {Container} from "react-bootstrap";
import Propstrendingnft from './Propstrendingnft';
import "./Trendingnft.css";

function Trendingnft() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        // autoplay:true,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
      };
  return (
    <div className="trendingnftslider_holder">
    <Container>
        <Slider {...settings}>
            <Propstrendingnft img={sld1} title='Lazy Cat'btnclick='Sandikasiltawa'yellowimg={yello}count='4/75'ruppies='price'ethvalue='12ETH'highestbid='highest Bid'ethvalue2='4.3ETH'imgsml={trending_headimg}/>
            <Propstrendingnft img={sld2} title='Bakantan'btnclick='rend_art'count='34/135'ruppies='price'ethvalue='2ETH'highestbid='highest Bid'ethvalue2='0.3ETH'imgsml={trending_headimg}/>
            <Propstrendingnft img={sld3} title='Hairy Harry'btnclick='Mettoz'yellowimg={yello}count='9/75'ruppies='price'ethvalue='5ETH'highestbid='highest Bid'ethvalue2='3.1ETH'imgsml={trending_headimg}/>
            <Propstrendingnft img={sld4} title='Masked Man'btnclick='ridsect'count='15/45'ruppies='price'ethvalue='2ETH'highestbid='highest Bid'ethvalue2='0.3ETH'imgsml={trending_headimg}/>
            <Propstrendingnft img={sld3} title='Hairy Harry'btnclick='Mettoz'yellowimg2={yello}count='9/75'ruppies='price'ethvalue='5ETH'highestbid='highest Bid'ethvalue2='3.1ETH'imgsml={trending_headimg}/>
        </Slider>
    </Container>
    </div>
  )
}

export default Trendingnft