import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Pricing.css';
const Pricing = () => {
    return (
        <div className='container membership-container'>
        <div className="services-intro-text">
            <h2>Pricing  <span style={{color:'blue'}}>Plans</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="pricing-card">
         <Row xs={1} md={1} lg={2} className="g-4">
            
                <Col>
                    <Card className="plan">
                        <div className="pricing-plan">
                            <div>
                                <img src="http://zozothemes.com/html/foody/foody2/images/pricing/1.jpg" alt="" />
                            </div>
                            <div className="me-2">
                                <h2 className="text-danger">Foody Pricing Plan 1</h2>
                                <ul>
                                    <li>Large 2 Chicken Breast</li>
                                    <li>Tomato Salad</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry (2 Person)</li>
                                    <li>Fried Rice with Prawn</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry</li>
                                </ul>
                               
                                
                                <Card.Footer>
                                <div className="Card-Footer">
                                    <h3>$19.50</h3>
                                    <button className="btn btn-danger">Get It Now</button>
                                </div>
                                </Card.Footer>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="plan">
                        <div className="pricing-plan">
                            <div>
                                <img src="http://zozothemes.com/html/foody/foody2/images/pricing/2.jpg" alt="" />
                            </div>
                            <div className="me-2">
                                <h2 className="text-danger">Foody Pricing Plan 2</h2>
                                <ul>
                                    <li>Large 2 Chicken Breast</li>
                                    <li>Tomato Salad</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry (2 Person)</li>
                                    <li>Fried Rice with Prawn</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry</li>
                                </ul>
                               
                                
                                <Card.Footer>
                                <div className="Card-Footer">
                                    <h3>$25.50</h3>
                                    <button className="btn btn-danger">Get It Now</button>
                                </div>
                                </Card.Footer>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <br />
         <Row xs={1} md={1} lg={2} className="g-4">
            
                <Col>
                    <Card className="plan">
                        <div className="pricing-plan">
                            <div>
                                <img src="http://zozothemes.com/html/foody/foody2/images/pricing/3.jpg" alt="" />
                            </div>
                            <div className="me-2">
                                <h2 className="text-danger">Foody Pricing Plan 3</h2>
                                <ul>
                                    <li>Large 2 Chicken Breast</li>
                                    <li>Tomato Salad</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry (2 Person)</li>
                                    <li>Fried Rice with Prawn</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry</li>
                                </ul>
                               
                                
                                <Card.Footer>
                                <div className="Card-Footer">
                                    <h3>$35.50</h3>
                                    <button className="btn btn-danger">Get It Now</button>
                                </div>
                                </Card.Footer>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="plan">
                        <div className="pricing-plan">
                            <div>
                                <img src="http://zozothemes.com/html/foody/foody2/images/pricing/4.jpg" alt="" />
                            </div>
                            <div className="me-2">
                                <h2 className="text-danger">Foody Pricing Plan 4</h2>
                                <ul>
                                    <li>Large 2 Chicken Breast</li>
                                    <li>Tomato Salad</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry (2 Person)</li>
                                    <li>Fried Rice with Prawn</li>
                                    <li>Peri Peri Sousage</li>
                                    <li>French Fry</li>
                                </ul>
                               
                                
                                <Card.Footer>
                                <div className="Card-Footer">
                                    <h3>$39.50</h3>
                                    <button className="btn btn-danger">Get It Now</button>
                                </div>
                                </Card.Footer>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
    );
};

export default Pricing;