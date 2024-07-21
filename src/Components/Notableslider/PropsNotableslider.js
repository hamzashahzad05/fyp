import React from 'react'
import { Link } from 'react-router-dom';
import './Notableslider.css';

const PropsNotableslider =(props)=> {
 
  return (
    <div class="notableslider-mg position-relative" onClick={()=>props.handelGameDisplay(props.id)} >
            <div class="slider-img-head1">
                 <img class="img-fluid img-width" src={props.img} alt="" />
             </div>
             <div className="heading_detail">
              <h3>{props.title}</h3>
                <div className='hold_by position-relative'>
                  <span className='by'>By:</span><Link to="/" className='btn_notableslider'>{props.btnclick}</Link>
                  <div class="yellow-img"><img class="img-fluid" src={props.yellowimg} alt="" /></div>
                  <div class="yellow-img2"><img class="img-fluid" src={props.yellowimg2} alt="" /></div>
                </div>
           </div>

    </div>
  )
}

export default PropsNotableslider









// import React from 'react'
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
// import './Sliderrecommended.css';
// const Propssliderrecommended =(props)=>{
//     return(
//         <div class="slider-mg position-relative">
//           <div class="slider-img-head1">
//               <img class="img-fluid" src={props.img} alt="" />
//           </div>
//           <div className="heading_detail">
//             <h2>{props.title}</h2>
//               <Link to="/" className='slider_links'><span className='price'>props.rate</span>  <span className='right_errow'><FontAwesomeIcon  icon={faArrowRightLong}/></span></Link>
//           </div>
//         </div>
//     )
// }
// export default Propssliderrecommended