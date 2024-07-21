import React from 'react'
import {Container , Tabs, Tab} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import sm1 from '../../assets/images/c1.jpg'
import sm2 from '../../assets/images/c2.jpg'
import sm3 from '../../assets/images/c3.jpg'
import sm4 from '../../assets/images/c4.jpg'
import sm5 from '../../assets/images/c5.jpg'
import { Link } from "react-router-dom";
import "./Topcollections.css";

function Topcollections() {
  return (
    <div className="topcollections_holder position-relative">
        <Container>
            <div className="trending_nft_holder">
                <h3>Trending <span className='nfts_clss'>NFTs</span></h3>
            </div>
           <div className="topcollections_heading ">
                <div className="topcollectionslist_item_holder d-flex justify-content-between">
                    <div className='topcollectionslist_item'><h3><span className='top'>Top</span> Collections</h3><span className='arrow_down'><FontAwesomeIcon  icon={faAngleDown}/></span></div>
                    <div className="ethereum_holder d-flex position-relative"> <h3>ethereum</h3><span className='arrow_down'><FontAwesomeIcon  icon={faAngleDown}/></span></div>
                </div>
            <div className="main_tab_holder position-relative">
               <div className="total_volume"><h3>Total Volume- <span className='calculation'>$3,506,030, USD</span></h3></div>              
                <div className="tab_holder position-relative">
                    <Tabs defaultActiveKey="home"id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="24 hours">
                            <div className="active_tabtext_holder">
                                <ul>
                                    <li className='sml_img_list_item d-flex '><span className='num'>1</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>2</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>3</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>4</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>5</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>

                                     
                                    <li className='sml_img_list_item d-flex '><span className='num'>6</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>7</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>8</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>9</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>10</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>


                                    
                                    <li className='sml_img_list_item d-flex '><span className='num'>11</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>12</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>33</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>14</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>15</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>



                                
                                
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="7 days">
                            <div className="active_tabtext_holder">
                                <ul>
                                    
                                <li className='sml_img_list_item d-flex '><span className='num'>1</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>2</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>3</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>4</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>5</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>

                                    
                                    <li className='sml_img_list_item d-flex '><span className='num'>6</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>7</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>8</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>9</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>10</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>

                                    
                                    <li className='sml_img_list_item d-flex '><span className='num'>11</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>12</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>13</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>14</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>15</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>

                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="30 days">
                            <div className="active_tabtext_holder">
                                    <ul>
                                        
                                    <li className='sml_img_list_item d-flex '><span className='num'>1</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>2</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>3</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>4</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>5</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    
                                    <li className='sml_img_list_item d-flex '><span className='num'>6</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>7</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>8</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>9</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>10</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>

                                    
                                    <li className='sml_img_list_item d-flex '><span className='num'>11</span><div class="sml_im_holder"><img class="img-fluid" src={sm1} alt="" /></div><div><h3 className='floor_htag'>Masked Man club</h3><span className='floor_text'>Floor:100.3ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>12</span><div class="sml_im_holder"><img class="img-fluid" src={sm2} alt="" /></div><div><h3 className='floor_htag'>Chill Dudes</h3><span className='floor_text'>Floor:40.4ETH</span></div> <h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>13</span><div class="sml_im_holder"><img class="img-fluid" src={sm3} alt="" /></div><div><h3 className='floor_htag'>Hairy Harry </h3><span className='floor_text'>Floor:12.1ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>14</span><div class="sml_im_holder"><img class="img-fluid" src={sm4} alt="" /></div><div><h3 className='floor_htag'>The Bakantan</h3><span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>
                                    <li className='sml_img_list_item d-flex'><span className='num'>15</span><div class="sml_im_holder"><img class="img-fluid" src={sm5} alt="" /></div><div><h3 className='floor_htag'>Lazy Cat Club </h3> <span className='floor_text'>Floor:100.3ETH</span></div><h3 className='calculation_htag'>1.2K ETH <span className='gray_content'>$3.1M <span className='green_content'>+1454.3%</span></span></h3> </li>

                                    </ul>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="btn_view_collection_holder"><Link to="/" className='btn_viewcollection'>View all collection</Link></div>
                </div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Topcollections
