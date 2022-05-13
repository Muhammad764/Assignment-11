import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://mighty-reaches-68293.herokuapp.com/item`
        fetch(url, {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
            .then(result => {
            console.log(result)
        })
    }

    return (
        <div className='from'>
            <h1 className='mb-5 text-muted'>Add Your Items</h1>
            <form className='mx-auto g-5 '  onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name'  className='w-50' {...register("name", { required: true, maxLength: 20 })} /> <br/>
      <textarea placeholder='Description' className='mt-2 w-50' {...register("description")} /><br/>
      <input placeholder='Price' className='mt-1 w-50' type="number" {...register("price")} /><br/>
      <input placeholder='Photo URL' className='mt-2 w-50' type="text" {...register("img")} /><br/>
      <input className='mt-2 w-50 bg-danger border-0 py-2' type="submit" value="Add Item" />
    </form>

      
        </div>
    );
};

export default AddItem;