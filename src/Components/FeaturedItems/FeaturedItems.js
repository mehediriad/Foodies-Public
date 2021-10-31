import React from 'react';
import { Row } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import SingleItems from '../SingleItems/SingleItems';
import './FeaturedItems.css'

const FeaturedItems = () => {
    const [items,setItems] = useItems();
    return (
        <div className="featured-services-container services-container container">
             <div className="services-intro-text">
                <h2>Featured <span style={{color:'blue'}}>Items</span> For You</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="card-container container">
            <Row xs={1} md={2} lg={3} className="g-4">
           
               
                {
                    items.map((item ,index)=>index<6 && <SingleItems 
                    key={item._id}
                    item={item}
                    ></SingleItems>)
                 }
                 
                
             </Row>
            </div>
            
        </div>
    );
};

export default FeaturedItems;