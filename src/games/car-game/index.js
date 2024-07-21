import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'
const CarFix = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'car-assets/Build/Updated Webgl Build.loader.js',
    dataUrl: 'car-assets/Build/Updated Webgl Build.data',
    frameworkUrl: 'car-assets/Build/Updated Webgl Build.framework.js',
    codeUrl: 'car-assets/Build/Updated Webgl Build.wasm'
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

export default CarFix
