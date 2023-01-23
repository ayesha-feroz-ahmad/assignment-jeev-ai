import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm, useform } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct } from '../../Components/action/common'
import { setFilteredData } from '../redux/slices/dashboardSlice'

function EditModal({ show, onHide, activEditDetail }) {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [loader, setLoader] = useState(false)

  const { dashboardData, filteredData } = useSelector(state => state.dashboard)

  const onEditProduct = async (data) => {
    setLoader(true)
    data['image'] = activEditDetail['image']
    data['rating'] = activEditDetail['rating']
    try {
      let response = await editProduct(activEditDetail?.id)
      let modData = filteredData.map((item) => {
        if (item.id == activEditDetail?.id) {
          return data
        }
        else {
          return item
        }
      })
      onHide()
      dispatch(setFilteredData(modData))
      setLoader(false)
    } catch ({ response }) {
      setLoader(false)
    }
  }

  return (
    <Modal show={show} onHide={onHide} style={{zIndex:9999}}>
      <Modal.Header closeButton>
        <Modal.Title> <h1 className="h3 mb-0 text-gray-800">Product Detail</h1></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={handleSubmit(onEditProduct)}>
            <label htmlFor="fname" >Category</label>
            <input type="text" className='edit' placeholder="Your category.." name="category" {...register("category")} defaultValue={activEditDetail?.category} />
            <label htmlFor="lname">Title</label>
            <input type="text" className='edit' placeholder="Title.." name='title' {...register("title")} defaultValue={activEditDetail?.title} />
            <label htmlFor="fname">Price</label>
            <input type="text" className='edit' placeholder="Price.." name='price' {...register("price")} defaultValue={activEditDetail?.price} />

            <input className='editBtn' type="submit" defaultValue={loader ? 'loading' :"Submit"} />
          </form>
        </div>
      </Modal.Body>

    </Modal>
  )
}

export default EditModal
