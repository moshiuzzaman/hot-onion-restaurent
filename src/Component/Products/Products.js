import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = ({product}) => {
    const {name,images,shortDescription,price,id}=product
    return (
        <Col className="mb-4" md={4} >
            <Link className="food-card-link" to={`/food/${id}`}>
                <Card className="pt-3 pb-3 filter-single-product">
                    <div align='center'>
                        <img  src={images[0]} width={200} alt=""/>
                        <h4  className="product-neme pt-3">{name}</h4>
                        <p>{shortDescription}</p>
                        <h4 fontSize="15" className="price">${price}</h4>
                    </div>
                </Card>
            </Link>
            
        </Col>
    );
};

export default Products;