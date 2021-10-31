import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const {itemId}=useParams();
    const [item,setItem] = useState({});
    useEffect(()=>{
        fetch(`https://vast-basin-46033.herokuapp.com/items/${itemId}`)
        .then(res=>res.json())
        .then(result=>setItem(result))
    },[])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = (data)=>{
        const orderedData = {
            key: item._id,
            personInfo:{
                name:data.name,
                email:data.email,
                address:data.address,
                city:data.city,
                phone:data.phone
            },
            itemInfo:{
                title:item.title,
                price:item.price,
                img:item.img
            },
            status: 'Pandding'
        }
        console.log(data,item)

        fetch('https://vast-basin-46033.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedData)
        })
        .then(res=>res.json())
        .then(response=> {
            if (response.insertedId) {
                alert('Order processed Successfully');
                
                reset();
            }
        })
    }
    return (
        <div className="container">
            <form className="shipping-form text-center" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Shipping;