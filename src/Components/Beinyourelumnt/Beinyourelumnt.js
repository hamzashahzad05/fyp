import React from 'react'
import {Container ,Row,Col,} from "react-bootstrap";
import beinyourkey from "../../assets/images/beinyourtext.png";
import topboy_img from "../../assets/images/www.png";
import headimg2 from "../../assets/images/head_img.png";
import heart1 from "../../assets/images/heart.png";
import color_img from "../../assets/images/color_background.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import "./Beinyourelumnt.css";

function Beinyourelumnt() {
    const handelGame=()=>{
        
    }

  return (
    <div className="beinyourelumnt_holder position-relative">
        <Container>
            <Row>
            <Col md={6}>
                <div className="beinleft_hold">
                    <div className="beinyourimg_holder">
                        <img class="img-fluid" src={beinyourkey} alt="" />
                    </div>
                    <h1 className='discoverrare'>Discover Rare Collections od Art and Unique <span className='nft_cls'>NFTs</span> Wordwide .</h1>
                   <div className="inputinformation">
                        <Form className="requestinformation-form">
                            <Form.Group  controlId="exampleForm.ControlInput1">
                                <Form.Control type="text"className='requestinformation-input-area'  placeholder="Search Collections, Artist , NFTs or Users" />
                            </Form.Group>    
                        </Form>
                   </div>
                   <div className="btn_holder1 d-flex">
                        <div><Link to="/" className='explore_now'>Explore Now <span className='arrow_rightcls'><FontAwesomeIcon  icon={faArrowRightLong}/></span></Link> </div>
                        <div><Link to="/" className='howit_works'>How it Works <span className='arrow_rightcls'><FontAwesomeIcon  icon={faArrowRightLong}/></span></Link> </div>
                   </div>
                   <div className="view_sport_holder">
                    <h2>View Supported Blocks</h2>
                    <ul>
                        <li><Link to ="/" className='viewsport_btn'>Ethereum</Link></li>
                        <li><Link to ="/" className='viewsport_btn'>Binance Smart Chain</Link></li>
                        <li><Link to ="/"  className='viewsport_btn'>Cronos</Link></li>
                        <li><Link to ="/"  className='viewsport_btn'>Fantom</Link></li>
                    </ul>
                   </div>
                </div>
            </Col>
            
            <Col md={6}>
                <div className="beinright_hold position-relative" onClick={handelGame}>
                    <div className="boyimh_hold position-relative">
                        <img class="img-fluid" src={topboy_img} alt="" />
                    </div>
                    <div className="img_bottom_style position-relative"  >
                        <h2 className='hash_five'>Nice Guy #5</h2>
                        <span className='by_ridsect'>By:</span><Link to="/" className='btn_ridsect'>ridsect</Link>
                        <div className='stucture d-flex'>
                            <span className='seven'>7</span>
                            <div className="img_small">
                                <img class="img-fluid" src={headimg2} alt="" />
                            </div>
                            <div className="heart_small">
                                <img class="img-fluid" src={heart1} alt="" />
                            </div>
                        </div>
                    </div>
                    <h2 className='Featured_Collectible'>Featured Collectible</h2>
                    <div className="img_color_holder">
                       <img className="img-fluid" src={color_img} alt="" />
                     </div>
                </div>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Beinyourelumnt