import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
           <Container className="text-denger text-center">
           <h1 >Best food waiting for your belly</h1>
                <div className="bannerSubscribe">
                    <input className="border-0 banner-input-text" placeholder="Search food item" type="text"/>
                    <input className="border-0 banner-input-submit" type="submit"/>
                </div>
           </Container>
        </div>
    );
};

export default Banner;