import React, { useState } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import './Topcollections.css'
import './topCollection.css'

const resourceArray = [
  {
    srNo: '1',
    name: 'Masked Man Club',
    pic: '/assets/images/c1.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '2',
    name: 'Chill Dudes',
    pic: '/assets/images/c1.jpg',
    floor_calculation: 'Floor:40.4ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '3',
    name: 'Hairy Harry ',
    pic: '/assets/images/c3.jpg',
    floor_calculation: 'Floor:12.1ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '4',
    name: 'The Bakantan',
    pic: '/assets/images/c4.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '5',
    name: 'Lazy Cat Club ',
    pic: '/assets/images/c5.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '6',
    name: 'Masked Man Club',
    pic: '/assets/images/c1.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '7',
    name: 'Chill Dudes',
    pic: '/assets/images/c1.jpg',
    floor_calculation: 'Floor:40.4ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '8',
    name: 'Hairy Harry ',
    pic: '/assets/images/c3.jpg',
    floor_calculation: 'Floor:12.1ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '9',
    name: 'The Bakantan',
    pic: '/assets/images/c4.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '10',
    name: 'Lazy Cat Club ',
    pic: '/assets/images/c5.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '11',
    name: 'Masked Man Club',
    pic: '/assets/images/c1.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '12',
    name: 'Chill Dudes',
    pic: '/assets/images/c1.jpg',
    floor_calculation: 'Floor:40.4ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '13',
    name: 'Hairy Harry ',
    pic: '/assets/images/c3.jpg',
    floor_calculation: 'Floor:12.1ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '14',
    name: 'The Bakantan',
    pic: '/assets/images/c4.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  },
  {
    srNo: '15',
    name: 'Lazy Cat Club ',
    pic: '/assets/images/c5.jpg',
    floor_calculation: 'Floor:100.3ETH',
    calcu_htagvalue: '1.2K ETH',
    gray_cont: '$3.1M ',
    green_cont: '+1454.3%'
  }
]

function Topcollections(props) {
  const recently = props.recent
  const [screen, setScreen] = useState([])

  return (
    <div className="topcollections_holder position-relative">
      <Container>
        <div className="topcollections_heading ">
          <div className="topcollectionslist_item_holder d-flex justify-content-between">
            <div className="topcollectionslist_item">
              <h3>
                <span className="top">Recently</span> played games
              </h3>
              <span className="arrow_down">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </div>
          <div className="main_tab_holder position-relative">
            <div className="tab_holder position-relative">
              <div defaultActiveKey="home" id="uncontrolled-tab-example">
                <div eventKey="home" title="24 hours">
                  <div className="active_tabtext_holder">
                    <ul>
                      {recently.map((data, index) => {
                        if (data.length > 0 && data !== '') {
                          return (
                            <li className="sml_img_list_item d-flex">
                              {/* <div class="sml_im_holder"><img class="img-fluid" src={data.pic} alt="" /></div> */}
                              <div>
                                <h3 className="floor_htag">
                                  {data == 'game1'
                                    ? 'Night Sky'
                                    : data == 'game2'
                                    ? 'Highway getaway'
                                    : data == 'game3'
                                    ? 'Forest Run'
                                    : data == 'game4'
                                    ? 'Cannon Man'
                                    : data == 'game5'
                                    ? 'Season Run'
                                    : ''}
                                </h3>
                              </div>
                            </li>
                          )
                        } else {
                          return <h4 class="get_lastest_htag">No Recently played...</h4>
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Topcollections
