import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import "./singelFetured.css"

const SingleFetured = ({fetured}) => {
    const {icon, image, title, description} = fetured
    return (
        <Col md={4}>
            <img className="w-100" src={image} alt=""/>
            <Row className="pt-3">
                <Col md={2}>
                    <img  className="w-130" src={icon} alt=""/>
                </Col>
                <Col  md={10}>
                    <h6>{title}</h6>
                    <p><small>{description}</small></p>
                    <button className="feturedBtn">See More <FaArrowRight color="green"/></button>
                </Col>
            </Row>
        </Col>
    );
};

export default SingleFetured;