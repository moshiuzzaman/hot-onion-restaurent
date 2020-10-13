import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import map from '../../image/map.PNG'
import man from '../../image/man.png'
import './PlaceOrder.css'
import { UserContext } from '../../App';
import profile from '../../image/profile.png'
const PlaceOrder = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    console.log(loginUser);
    return (
        <Container>
            <Header />
            <Row className="mt-5">
                <Col className="p-5" md={8} >
                    <img className="w-100" src={map} alt="" />
                </Col>
                <Col className="mt-5" md={4}>
                    <div className="place-order-details">
                        <img className="w-25 ml-4 mb-2" src={man} alt="" />
                        <div className="shop-buyer-adress">

                            <div className="shop-buyer-adress-left" >
                                <div className="shop-buyer-adress-red mt-2"></div>
                                <div className="shop-buyer-adress-border"></div>
                                <div className="shop-buyer-adress-red"></div>
                            </div>
                            <div  >
                                <p><strong>Your Adress</strong></p>
                                <p><small>108 rd no 7</small></p>
                                <p className="mt-3"><strong>Shop Adress</strong></p>
                                <p><small>Gulshan plaja restora gr</small></p>
                            </div>


                        </div>
                        <h2 className="mb-0 mt-4"> 9:30</h2>
                        <p className="m-0"><small>Estimat delivery time</small></p>
                        <div className="shop-buyer-adress">
                            <img className="w-25 mr-3" src={profile} alt="" />
                            <div>
                                <h5 className="m-0">{loginUser.displayName}</h5>
                                <p className="m-0"><small>your raider</small></p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;