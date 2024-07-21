import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Col, Container, Row } from 'react-bootstrap'

const CannonMan = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'canon-man/CanonMan.loader.js',
    dataUrl: 'canon-man/CanonMan.data',
    frameworkUrl: 'canon-man/CanonMan.framework.js',
    codeUrl: 'canon-man/CanonMan.wasm'
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

export default CannonMan
