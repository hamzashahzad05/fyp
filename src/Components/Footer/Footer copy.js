import React from 'react'
import { Container ,Row ,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord ,faTelegram,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <footer id='footer'>
        <div className="footer_top">
           <Container>
            <Row>
              <Col md={6}>
                  <div className="left_foot_holder">
                    <h4 className='get_lastest_htag'>Get the lastest elumnt news</h4>

                   <div className="latestupdates_right">
                        <Form className='foot_requestinformation_form position-relative'>
                                <Form.Group  controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" className='foot_requestinformation_input_area' placeholder="email" />
                                </Form.Group>
                                <div className="sign_btn_holder">
                                    <Button  class="btn_sign_up">
                                       Sign up
                                    </Button>
                                </div>  
                        </Form>
                    </div>
                  </div>
              </Col>
              <Col md={6}>
                  <div className="right_foot_holder">
                    <h4 className='join_elumnt_htag'>join elumnt community</h4>
                    <div className="ul_li_structured_holder">
                       <ul>
                        <li><Link to="/"className='icon_hovering'><span className="foot_icons"><FontAwesomeIcon icon={faTwitter} /></span></Link></li>
                        <li><Link to="/"className='icon_hovering'><span className="foot_icons"><FontAwesomeIcon icon={faCamera} /></span></Link></li>
                        <li><Link to="/"className='icon_hovering'><span className="foot_icons"><FontAwesomeIcon icon={faDiscord} /></span></Link></li>
                        <li><Link to="/"className='icon_hovering'><span className="foot_icons"><FontAwesomeIcon icon={faTelegram} /></span></Link></li>
                        <li><Link to="/"className='icon_hovering'><span className="foot_icons"><FontAwesomeIcon icon={faYoutube} /></span></Link></li>
                       </ul>
                    </div>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <div className="holder_elumt_tag">
                  <h4 className='elumnt_text'>[elumnt]</h4>
                  <p>One of the lagest multi-chain digital marketplace for crypto collectibles and non-fungible tokens(NFTS).Discover new and exclusive digital items worldwidw</p>

                </div>
              </Col>
              <Col  md={4} sm={6}>
                <div className="holder_market_tag">
                <h4 className='marketheading'>Marketplace</h4>
                  <ul>
                    <li><Link to="/"className='foot_links'> Explore</Link></li>
                    <li><Link to="/"className='foot_links'> Categories</Link></li>
                    <li><Link to="/"className='foot_links'> Create NFT</Link></li>
                    <li><Link to="/"className='foot_links'> How it works</Link></li>
                    <li><Link to="/"className='foot_links'> Resources</Link></li>
                    <li><Link to="/"className='foot_links'> Help center</Link></li>
                  </ul>
                </div>
              </Col>
              <Col  md={4} sm={6}>
                <div className="holder_Ecossystem_tag">
                  <h4 className='elumnt_text'>Ecossystem</h4>
                  <ul>
                    <li><Link to="/"className='foot_links'> DeFi protocol</Link></li>
                    <li><Link to="/"className='foot_links'> Pixul Token</Link></li>
                    <li><Link to="/"className='foot_links'> xPIXUL Token</Link></li>
                  </ul>
                </div>
              </Col>
            </Row>
           </Container>
        </div>
        <div className="footer_bottom">
          <Container>
            <div className="holder_bottom_foot d-flex justify-content-center">
              <div className="c_style">
                <span className='c_form'>c</span>
              </div> 
              <h4>Pixul,LLC. All Rights Reserved</h4>
            </div>
          </Container>
        </div>
    </footer>
  )
}

export default Footer