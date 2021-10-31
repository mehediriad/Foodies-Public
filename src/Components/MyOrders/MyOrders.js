import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {
    const { user } = useAuth();
    console.log('user',user)
    const [myOrders , setMyOrders] = useState([]);
    useEffect(()=>{
        fetch('https://vast-basin-46033.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setMyOrders(data))
    },[]);

    const handleOrderDelete = id =>{
        console.log(id)
        const url = `https://vast-basin-46033.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remainingOrders = myOrders.filter(order => order._id !== id);
                setMyOrders(remainingOrders);
            }
        })
    }
    let myOrderIndex = 1;
    return (
        <div className="container">
            <h2>My Orders: </h2>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    {
                       
                    }
                    <tbody>
                        {
                           
                            myOrders.map((myorder , index )=> user.email === myorder.personInfo.email && <tr>
                                 <th scope="row">{myOrderIndex++}</th>

                                <td className="order-img"> <img src={myorder.itemInfo.img} alt="" /></td>

                                <td>{myorder.itemInfo.title}</td>

                                <td>${myorder.itemInfo.price}</td>

                                <td>{myorder.status}</td>

                                <td><button onClick={()=>handleOrderDelete(myorder._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default MyOrders;