import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [manageOrders , setManageOrders] = useState([]);
    useEffect(()=>{
        fetch('https://vast-basin-46033.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setManageOrders(data))
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
                const remainingOrders = manageOrders.filter(order => order._id !== id);
                setManageOrders(remainingOrders);
            }
        })
    }
    const handleOrderApproved = id =>{
        console.log('Accepted')
    }
    return (
        <div className="container">
            <h2 className="text-center">Manage Your Orders</h2>
            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancel</th>
                        <th scope="col">Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrders.map((manageOrder , index )=> <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{manageOrder.personInfo.name}</td>
                                <td>{manageOrder.personInfo.email}</td>
                                
                                <td>{manageOrder.itemInfo.title}</td>
                                <td>${manageOrder.itemInfo.price}</td>
                                <td>{manageOrder.status}</td>
                                <td><button onClick={()=>handleOrderDelete(manageOrder._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
                                <td><button onClick={()=>handleOrderApproved(manageOrder._id)} className="btn btn-success">Accept</button></td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default ManageOrders;