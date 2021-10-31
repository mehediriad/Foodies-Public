import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import './SingleItems.css';

const SingleItems = (props) => {
    const history = useHistory();
    const {_id, title , description , price , img} = props.item;
    const hendlePlaceOrder=()=>{
        history.push(`/shipping/${_id}`);
        console.log('clicked',_id)
    }
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            
            </Card.Body>
            <p className="w-100 px-2">{description.slice(0,100)}</p>
            <Card.Footer>
                <div className="author-price">
                    <div className="author">
                        <span> 
                            <h3>${price}</h3>
                        </span>
                    </div>
                    <div className="orders-btn">
                    
                            <button className="btn btn-primary" onClick={hendlePlaceOrder}>Buy Now</button>
                    
                </div>
                </div>
            </Card.Footer>
        </Card>
 </Col>
    );
};

export default SingleItems;