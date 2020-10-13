import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import footerLogo from '../../image/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <div  className="footer pt-5">
            <Container className="text-light">
                <Row>
                    <Col md={6}>
                        <img width={200} src={footerLogo} alt=""/>
                    </Col>
                    <Col md={3}>
                        <li>About online food</li>
                        <li>Read your blog</li>
                        <li>Sing up to deliver</li>
                        <li>Add your restaurent</li>
                    </Col>
                    <Col md={3}>
                        <li>Get Helps</li>
                        <li>Read faqs</li>
                        <li>View all cities</li>
                        <li>Resturent nere me</li>
                    </Col>
                    
                </Row>
                <div>
                    <div className="footer-menu">
                        <Link to="">Pricing</Link>
                        <Link to="">Trums of use</Link>
                        <Link  to="">Privacy policy</Link>
                    </div>
                </div>
            </Container>
       </div>
    );
}
export default Footer;