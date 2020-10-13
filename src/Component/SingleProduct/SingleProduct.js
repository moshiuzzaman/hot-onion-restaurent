import React, {  useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { foodsData } from '../../Fakedata/foodsData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './SingleProduct.css'

import './SingleProduct.css'
const SingleProduct = () => {
    const { id } = useParams();
    const selectedProduct = foodsData.filter(pd => pd.id === parseInt(id))
    const { name, images, price, fullDescription } = selectedProduct[0]

    const [quantity,setQuantity] = useState(1)
    const [cart,setCart]=useState([])
    
    const countIncress=()=>{
        setQuantity(quantity+1)
    }
    const countDecress=()=>{
        quantity>0 && setQuantity(quantity-1)
    }
    
    useEffect(()=>{
        const databaseFood=getDatabaseCart()
        const foodKey=Object.keys(databaseFood)
        const cartproduct=foodKey.map(pdKey=>{
            const product=foodsData.find(pd=>pd.id===parseInt(pdKey))
            product.quantity=databaseFood[pdKey]
            return product
            
        })
        
        setCart(cartproduct)
    },[])

   const addToCartHandeler=(product)=>{
    const alreadyAdded=cart.find(pd=>pd.id===product.id)
    let newCart
    let newQuantity
    if(alreadyAdded){
     newQuantity=alreadyAdded.quantity+quantity;
     alreadyAdded.quantity=newQuantity;
     const other=cart.filter(pd => pd.id !== alreadyAdded.id)
     newCart=[...other,alreadyAdded]    
    }
    else{
        product.quantity=quantity
        newCart=[...cart,product]
    }
     setCart(newCart)
       addToDatabaseCart(product.id, newQuantity)
   }

    return (
        <>
            <Header />
            <Container className="mt-5" >
                <Row>
                    <Col md={5} className="mt-5">
                        <h1 className="singleProductheadding">{name}</h1>
                        <p>{fullDescription}</p>
                        <Row className="rounded-pill pl-4 pr-4 my-4">
                            <Col md={2}>
                                <h1>${price}</h1>
                            </Col>
                            <Col>
                                <div className="count-handel">
                                    <h3>
                                        <span onClick={countDecress} className="count-handel-icon">-</span>
                                        <span>{quantity}</span>
                                        <span onClick={countIncress}  className="count-handel-icon">+</span>
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                        <Button onClick={()=>addToCartHandeler(selectedProduct[0])}  className="rounded-pill pl-4 pr-4 " variant="danger"> <FaCartPlus /> Add</Button>
                        <Row className="mt-5">
                            <Col>
                                <img className="w-100" src={images[0]} alt=""/>
                            </Col>
                            <Col>
                                <img className="w-100" src={images[1]} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <img className="w-100" src={images[0]} alt="" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};
export default SingleProduct;