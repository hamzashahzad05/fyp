import React from 'react'
import { Link } from 'react-router-dom';
import "./Trendingnft.css";
const Propstrendingnft =(props)=> {
  return (
    <div class="trendingnftslider-mg position-relative">
            <div class=" trendingnft_slider_img">
                 <img class="img-fluid" src={props.img} alt="" />
             </div>
             <div className="trendin_heading_detail">
               <Link to="/" className='btn_trending_slider'>{props.btnclick}</Link>
                  <div className='hold_by position-relative d-flex'>
                    <h3>{props.title}</h3>
                    <div class="trending_yellow_img"><img class="img-fluid" src={props.yellowimg} alt="" /></div>
                    <div className="trending_pointscalculate">{props.count}</div>
                  </div>
             </div>
             <div className='main_hold_left_right d-flex'>
                <div className="left_side"><h3>{props.ruppies}<span className='eth_cls d-block'>{props.ethvalue}</span></h3></div>
                <div className="right_side"><h3>{props.highestbid}<span className='eth_cls d-block'>{props.ethvalue2}</span></h3></div>
                <div className="trending_imglogo"> <img class="img-fluid" src={props.imgsml} alt="" /></div>
             </div>
    </div>
  )
}

export default Propstrendingnft
