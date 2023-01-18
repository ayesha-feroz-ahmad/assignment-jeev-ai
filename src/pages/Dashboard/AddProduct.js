import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProductData } from '../redux/slices/dashboardSlice'

function AddProduct({ show, onHide }) {
  const dispatch=useDispatch()
  const { register, handleSubmit } = useForm()
  const [loader, setLoader] = useState(false)

  const onAddProduct = (data) => {
  
  data['rating'] = {'rate':data['rating']}
  data["image"]="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  dispatch(addProductData(data))
  onHide()
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title> <h1 className="h3 mb-0 text-gray-800">Add Product Detail</h1></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={handleSubmit(onAddProduct)}>
            <label htmlFor="fname" >Category</label>
            <input type="text" className='edit' placeholder="Your category.." name="category" {...register("category", {
              required: {
                value: true,
                message: "Category is required"
              },
            })} defaultValue="" />
            <label htmlFor="lname">Title</label>
            <input type="text" className='edit' placeholder="Title.." name='title' {...register("title", {
              required: {
                value: true,
                message: "title is required"
              },
            })} defaultValue="" />
            <label htmlFor="fname">Price</label>
            <input type="text" className='edit' placeholder="Price.." name='price' {...register("price", {
              required: {
                value: true,
                message: "Price is required"
              },
            })} defaultValue="" />
            <label htmlFor="fname">Rating</label>
            <input type="text" className='edit' placeholder="Price.." name='price' {...register("rating", {
              required: {
                value: true,
                message: "Rating is required"
              },
            })} defaultValue="" />
           
            <input className='editBtn' type="submit" defaultValue={loader ? 'loading' : "Submit"} />
          </form>
        </div>
      </Modal.Body>

    </Modal>
  )
}

export default AddProduct
