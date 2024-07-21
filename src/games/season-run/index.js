import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'

const SeasonRun = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'season-man/SeasonRun.loader.js',
    dataUrl: 'season-man/SeasonRun.data',
    frameworkUrl: 'season-man/SeasonRun.framework.js',
    codeUrl: 'season-man/SeasonRun.wasm'
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

export default SeasonRun
