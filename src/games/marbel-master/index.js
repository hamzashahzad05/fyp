import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'

const MarbelMaster = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'marbel-master/Marble Mater.loader.js',
    dataUrl: 'marbel-master/Marble Mater.data',
    frameworkUrl: 'marbel-master/Marble Mater.framework.js',
    codeUrl: 'marbel-master/Marble Mater.wasm'
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

export default MarbelMaster
