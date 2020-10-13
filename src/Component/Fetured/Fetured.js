import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Fetured.css'
import { featuresData } from '../../Fakedata/featuresData';
import SingleFetured from '../SingleFetured/SingleFetured';


const Fetured = () => {
    
    return (
        <Container className="pb-5">
            <h3 className='mb-3'>Why you choose us!</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy</p>
            <Row  className="mt-5">
                {
                    featuresData.map(fd=><SingleFetured key={fd.id} fetured={fd}></SingleFetured>)
                }
            </Row>
        </Container>
    );
};

export default Fetured;