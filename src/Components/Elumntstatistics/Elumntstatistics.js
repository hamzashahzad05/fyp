import React from 'react'
import {Container ,Row,Col} from "react-bootstrap";
import "./Elumntstatistics.css";
import HouseFix from '../../games/house-fix';

function Elumntstatistics() {
  return (
    <div className="elumntstatistics_holder">
        <Container className='cont'>
            <Row>
                <Col sm={12}>
                    <div className="main_hold">
                        {<HouseFix/>}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Elumntstatistics