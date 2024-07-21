import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'

const CarParking = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'car-parking/carParking.loader.js',
    dataUrl: 'car-parking/carParking.data',
    frameworkUrl: 'car-parking/carParking.framework.js',
    codeUrl: 'car-parking/carParking.wasm'
  })

  return (
    <div className="elumntstatistics_holder">
      <Container className="cont">
        <Row>
          <Col sm={12}>
            <div className="main_hold">
              <Unity unityProvider={unityProvider} style={{ width: '100%' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CarParking
