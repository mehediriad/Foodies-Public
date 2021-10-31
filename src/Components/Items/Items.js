import React from 'react';
import { Row } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import SingleItems from '../SingleItems/SingleItems';
import './Items.css';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div className="services-container">
            <div className="services-intro-text">
                <h2>Our <span style={{color:'blue'}}>Items</span> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        <div className="card-container container">
        <Row xs={1} md={3} className="g-4">
           
           
            {
                items.map(item=><SingleItems 
                key={item._id}
                item={item}
                ></SingleItems>)
            }
             
            
         </Row>
        </div>
        
    </div>
    );
};

export default Items;