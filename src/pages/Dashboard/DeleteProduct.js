import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { deleteProduct } from '../../Components/action/common'
import { deleteDashboardData, setFilteredData } from '../redux/slices/dashboardSlice'
import {toast} from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

function DeleteProduct({show,onHide , activEditDetail}) {
  const dispatch=useDispatch()
  const {filteredData} =useSelector(state=>state.dashboard)

  const onDelete = async () => {
    const deletedId = activEditDetail?.id
    try {
      let response = await deleteProduct(deletedId)
      let remData = filteredData.filter((item)=>{
        return item.id!=activEditDetail?.id
      })
      dispatch(setFilteredData(remData))
      dispatch(deleteDashboardData(remData))
      onHide()
      toast.success('Item deleted successfully')
    } catch ({ response }) {
    }
  }


  return (
    <Modal show={show} onHide={onHide} style={{zIndex:9999}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            No
          </Button>
          <Button variant="primary" onClick={onDelete} >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default DeleteProduct
