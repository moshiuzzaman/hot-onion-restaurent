import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { foodsData } from '../../Fakedata/foodsData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import CartProduct from '../CartProduct/CartProduct';
import Header from '../Header/Header';
import './CheckOut.css'

const CheckOut = () => {
    const { register, errors, handleSubmit } = useForm({
        mode: "onBlur"
    });
    const onSubmit = data => { }
    const [cart, setCart] = useState([])
    let subtotal=0
    let delivery= 0
    
    const newSubtotal=cart.map(pd =>{
        const price= pd.price;
        const quantity= pd.quantity
        delivery=delivery+quantity*.25
        const itemPrice=price*quantity
        subtotal =subtotal + itemPrice
    })
    let tax= subtotal/50
    const total =subtotal+tax+delivery;
    useEffect(() => {
        const databaseFood = getDatabaseCart()
        const foodId = Object.keys(databaseFood);
        const cartFood = foodId.map(fId => {
            const product = foodsData.find(fd => fd.id === parseInt(fId))
            product.quantity = databaseFood[fId]
            return product;
        })
        setCart(cartFood);
    }, [])
    return (
        <Container className="checkout">
            <Header />
            <Row className="mt-5">
                <Col md={9}>
                    <div className='delivery-form'>
                        <h3>Edit delivery details</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" placeholder="Name" ref={register({ required: true })} />
                            {errors.name && <p className='error'>This is required</p>}
                            <input name="rodeNo" placeholder="Road No" ref={register({ required: true })} />
                            {errors.rodeNo && <p className='error'>This is required</p>}
                            <input name="password" placeholder="Flat, Suite Or House" ref={register({ required: true })} />
                            {errors.password && <p className='error' >This is required</p>}
                            <input name="confirmPassword" placeholder="Business Name" ref={register({ required: true })} />
                            {errors.confirmPassword && <p className='error'>This is required</p>}
                            <textarea name="message" placeholder="Add delivery insteactor" ref={register({ required: true })} />
                            {errors.message && <p className='error'>This is required</p>}
                            <input type="submit" />
                        </form>
                    </div>
                </Col>
                <Col md={3}>
                    <p>From <strong>Gulshan plaja restora gr </strong></p>
                    <p>Arriving in 20-30 minite </p>
                    <p>107 rd no 8</p>
                    {
                        cart.map(fd => <CartProduct key={fd.id} food={fd}></CartProduct>)
                    }
                    <p><small>Subtotal ({cart.length} item) :  <span className="checkout-price">${subtotal}</span></small></p>
                    <p><small>Tax :  <span className="checkout-price">${tax}</span></small></p>
                    <p><small>Delivery : <span className="checkout-price">${delivery}</span></small> </p>
                    <h6 className="checkout-total">Total: <span className="checkout-price">${total}</span></h6>

                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;