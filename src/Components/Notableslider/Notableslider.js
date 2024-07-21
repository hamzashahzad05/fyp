import React from 'react'
import Slider from 'react-slick'

import { Container } from 'react-bootstrap'
import PropsNotableslider from './PropsNotableslider'
import './Notableslider.css'

function Notableslider(props) {
  function DeleteGame() {
    console.log('remove game')
    document.querySelector('canvas').remove()
    //gameInstance = null;
  }
  const handelGameDisplay = (id) => {
    // DeleteGame()
    props.handelGameFlag(id)
  }
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="notableslider_holder position-relative">
      <Container>
        <Slider {...settings}>
          <PropsNotableslider
            handelGameDisplay={handelGameDisplay}
            img="/assets/images/game1.jpg"
            id={'game1'}
            title="Night Sky"
            btnclick="hannan"
          />
          <PropsNotableslider
            handelGameDisplay={handelGameDisplay}
            img="/assets/images/game2.jpg"
            id={'game2'}
            title="Highway Getaway"
            btnclick="hannan"
          />
          <PropsNotableslider
            handelGameDisplay={handelGameDisplay}
            img="/assets/images/img4.png"
            id={'game3'}
            title="Forest Run"
            btnclick="hannan"
          />
          <PropsNotableslider
            handelGameDisplay={handelGameDisplay}
            img="/assets/images/img3.png"
            id={'game4'}
            title="Canon Man"
            btnclick="hannan"
          />
          <PropsNotableslider
            handelGameDisplay={handelGameDisplay}
            img="/assets/images/img4.png"
            id={'game5'}
            title="Season Run"
            btnclick="Mettoz"
          />
        </Slider>
      </Container>
    </div>
  )
}

export default Notableslider
