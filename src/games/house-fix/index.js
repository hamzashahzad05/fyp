import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'

const HouseFix = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'house-fix-assets/myGameLoader.loader.js',
    dataUrl: 'house-fix-assets/webgl.data',
    frameworkUrl: 'house-fix-assets/build.framework.js',
    codeUrl: 'house-fix-assets/build.wasm'
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

export default HouseFix
