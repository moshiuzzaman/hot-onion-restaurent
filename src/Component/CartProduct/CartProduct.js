import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './CartProduct.css'

const quantityIncress=()=>{

}
const quantityDecress=()=>{
    
}

const CartProduct = ({ food }) => {
    const { name, price, quantity } = food
    return (
        <div className="cartItem">
            <Row>
                <Col md={3} className="p-0 ">
                    <img className="w-100" src={food.images[0]} alt="" />
                </Col >
                <Col md={6} className="pl-3 m-0 p-0">
                    <p className="m-0">{name}</p>
                    <h6 className="m-0 cartPrice">${price}</h6>
                </Col>
                <Col  md={3} className="ml-auto m-0 p-0">
                    <div className="quantity-handel">
                        <h5>
                            <span onClick={quantityDecress} className="count-handel-icon">-</span>
                            <span className="cartQuantity">{quantity}</span>
                            <span onClick={quantityIncress} className="count-handel-icon">+</span>
                        </h5>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default CartProduct;