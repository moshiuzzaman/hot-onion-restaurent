import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import "./Home.css"
import { foodsData } from '../../Fakedata/foodsData';
import Products from '../Products/Products';
import Fetured from '../Fetured/Fetured';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const [productType, setProductType]=useState("Breakfast")
    const filter = foodsData.filter(pd=>pd.type ===productType)
    return (
        <>
            <Header/>
            <Link to="/order">aaaa</Link>
            <Banner/>
            <Container align="center" className="product-filter ">
                <div align="center" className="product-filter-menu mb-5">
                <button onClick={()=>setProductType('Breakfast') }>Breakfast</button>
                <button onClick={()=>setProductType('Lunch') } >Lunch</button>
                <button onClick={()=>setProductType('Dinner') } >Dinner</button>
                </div>
                <Row className="my-4">
                    {
                            filter.map(pd=><Products key={pd.id} product={pd}/>)
                        } 
                </Row>
                <Button  variant="light" disabled>Checkout Your Food</Button>
            </Container>
            <Fetured/>
            <Footer/>
        </>
    );
};

export default Home;