import { faArrowRight, faBookOpen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Membership.css'

const Membership = () => {
    return (
        <div className='container membership-container'>
            <div className="services-intro-text">
                <h2>Membership  <span style={{color:'blue'}}>Plans</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="membership-card">
             <Row xs={1} md={2} lg={3} className="g-4">
                
                    <Col>
                    <Card className="basic-plan basic-plan2">
                        <div>
                            <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <Card.Body>
                        <h2>Basic Plan</h2>
                        <h1>$25</h1>
                        <h6>Per 30 Days</h6>
                        <hr />
                        <Card.Text>
                            <p><FontAwesomeIcon icon={faCheck}/> Event & Program</p>
                            <p><FontAwesomeIcon icon={faCheck}/> Free Book & Computer</p>
                            <p><FontAwesomeIcon icon={faCheck}/> Advance All Program</p>
                        </Card.Text>
                        <button>Choose Plan <FontAwesomeIcon icon={faArrowRight}/> </button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="standard-plan basic-plan">
                        <div>
                            <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <Card.Body>
                        <h2>Standard Plan</h2>
                        <h1>$100</h1>
                        <h6>Per 30 Days</h6>
                        <hr />
                        <Card.Text>
                            <p><FontAwesomeIcon icon={faCheck}/> Event & Program</p>
                            <p><FontAwesomeIcon icon={faCheck}/> Free Book & Computer</p>
                            <p><FontAwesomeIcon icon={faCheck}/> Advance All Program</p>
                        </Card.Text>
                        <button>Choose Plan <FontAwesomeIcon icon={faArrowRight}/> </button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="gold-plan basic-plan">
                        <div>
                            <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <Card.Body>
                        <h2>Gold Plan</h2>
                        <h1>$250</h1>
                        <h6>Per 30 Days</h6>
                        <hr />
                        <Card.Text>
                            <p><FontAwesomeIcon icon={faCheck}/> Event & Program</p>
                            <p><FontAwesomeIcon icon={faCheck}/> Free Book & Computer</p>
                            <p><FontAwesomeIcon icon={faCheck}/> Advance All Program</p>
                        </Card.Text>
                        <button>Choose Plan <FontAwesomeIcon icon={faArrowRight}/> </button>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                
                </Row>
            </div>
        </div>
    );
};

export default Membership;