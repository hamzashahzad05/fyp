import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'

const ForestRun = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'forest-run/webgl.loader.js',
    dataUrl: 'forest-run/webgl.data',
    frameworkUrl: 'forest-run/webgl.framework.js',
    codeUrl: 'forest-run/webgl.wasm'
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

export default ForestRun
