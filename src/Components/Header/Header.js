import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../../helpers'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header id="header">
      <div className="head_top">
        <Container>
          <Row>
            <Col sm={2} xs={6}>
              <strong className="logo position-relative">
                <Link to="/" className="logo_clss">
                  <img className="img-fluid" src="/assets/images/home-logo.png" alt="" />
                  {/* add your logo in here */}
                </Link>
              </strong>
            </Col>
            <Col sm={10} xs={6}>
              <div className="nav-holder d-flex justify-content-end top-50">
                <Navbar expand="lg">
                  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                  <Navbar.Toggle>
                    <div className="br_head">
                      <div className="br"></div>
                      <div className="br"></div>
                      <div className="br"></div>
                    </div>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navlink-holder">
                      <ul className="nav_bar">
                        <li>
                          <Link to="/" className="nav_link">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav_link">
                            Explore
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav_link">
                            Collections
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav_link">
                            Artists
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav_link">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav_link">
                            Create
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="nav_link">
                            Connect Wallet
                          </Link>
                        </li>
                      </ul>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <div className="dropdown_holder position-relative d-flex">
                  <div class="head_top_iconimg">
                    <img class="img-fluid" src="/assets/images/head_img.png" alt="" />
                  </div>
                  <NavDropdown className="navdropdown_cls" id="basic-nav-dropdown">
                    <ul className="dropdown_ul">
                      <li>
                        <span className="dropdown_link" onClick={handleLogout}>
                          Logout
                        </span>
                      </li>
                    </ul>
                  </NavDropdown>
                </div>
                <Link to="/" className="plus_icon_click">
                  <span className="plus_icon">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Header
