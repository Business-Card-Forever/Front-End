import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = props => {
    return (
        <>
            <Container fluid className="footer">
                <Container fluid>
                    <Row>
                        <Col xs={12} md={12} xl={12} lg={12} className="social-media justify-content-center text-center">
                            <p className="follow">Follow us on:</p>
                            <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer" className="facebook social"> <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" className="twitter social"> <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
                            <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer" className="instagram social"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
                            <a href="https://www.pinterest.com" target='_blank' rel="noopener noreferrer" className="pinterest social"> <FontAwesomeIcon icon={faPinterest} size="2x" /> </a>
                            <a href="https://www.youtube.com" target='_blank' rel="noopener noreferrer" className="pinterest social"> <FontAwesomeIcon icon={faYoutube} size="2x" /> </a>
                        </Col>
                    </Row>
    
                    
                    <Row>
                        <Col xs={12} md={12} xl={12} lg={12} className="social-media justify-content-center text-center rights">
                            <p className="rights">Email: info@E-BCard.com <span className="span-col">|</span> Phone: +962-788703716 <br/> Copyright ©2021 Reserved For E-BCard Team</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Footer;