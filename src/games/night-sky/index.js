import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'

const NightSky = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'night-sky/WebGlBuild.loader.js',
    dataUrl: 'night-sky/WebGlBuild.data',
    frameworkUrl: 'night-sky/WebGlBuild.framework.js',
    codeUrl: 'night-sky/WebGlBuild.wasm'
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

export default NightSky
