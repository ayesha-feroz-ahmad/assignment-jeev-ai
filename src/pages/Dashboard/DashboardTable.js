import React, { Fragment, useEffect, useState } from 'react'
import { deleteProduct, fetchProductData } from '../../Components/action/common'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDashboardData, setDashboardData, setFilteredData } from '../redux/slices/dashboardSlice'
import {toast} from 'react-hot-toast'
import EditModal from './EditModal'
import DeleteProduct from './DeleteProduct'

function DashboardTable() {
  const dispatch = useDispatch()
  const { dashboardData, filteredData } = useSelector(state => state.dashboard)
  const [editPopup, setEditPopup] = useState(false)
  const [activEditDetail,setActiveEditDetail]=useState()
  const [sortDirection, setSortDirection] = useState('ascending')
  const [deleteProductModal,setDeleteProductModal]=useState(false)


  const fetchProducts = async () => {
    try {
      let response = await fetchProductData()
      dispatch(setDashboardData(response?.data))
      dispatch(setFilteredData(response?.data))
    } catch ({ response }) {

    }
  }

  const sortProduct = (sortBy) => {
    let sortedItems = [...filteredData]

    if (sortBy !== null) {
      sortedItems.sort((a, b) => {

        if ((a[sortBy] && b[sortBy]) && (a[sortBy].toLowerCase() < b[sortBy].toLowerCase())) {
          return sortDirection === 'ascending' ? -1 : 1;
        }
        if ((a[sortBy] && b[sortBy]) && (a[sortBy].toLowerCase() > b[sortBy].toLowerCase())) {
          return sortDirection === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    dispatch(setFilteredData(sortedItems));

  }

  const handleSortDirection = ()=>{
    if(sortDirection == "ascending" ){
      setSortDirection("decending")
    }else if(sortDirection == "decending"){
      setSortDirection("ascending")
    }
    
  }

  useEffect(()=>{
    sortProduct("category")
  },[sortDirection])


  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Category &nbsp;<i class="fas fa-regular fa-sort" onClick={handleSortDirection}></i></th>
            <th>Title </th>
            {/* <th>Description</th> */}
            <th>Price </th>
            <th>Image</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData?.length == 0 ? <tr colspan="4">
              <td></td>
              <td></td>
              <td></td>
              No data</tr> : <>
              {
                filteredData?.map((data) => {
                  return (
                    <Fragment key={data?.id}>
                      <tr>
                        <td>{data?.category}</td>
                        <td>{data?.title}</td>
                        {/* <td>{data?.description}</td> */}
                        <td>{data?.price}</td>
                        <td><img className='product-img' src={data?.image} /></td>
                        <td>{data?.rating?.rate}</td>
                        <td><span onClick={()=>{setEditPopup(true);setActiveEditDetail(data)}}><i className="fa-solid fa-pen-to-square"></i></span><span className='delete-icon' onClick={() => {setDeleteProductModal(true);setActiveEditDetail(data)}}><i className="fas fa-trash"></i></span></td>
                      </tr>
                    </Fragment>
                  )
                })
              }
            </>
          }

        </tbody>
      </table>

      {
        editPopup && (
          <EditModal 
           show={editPopup}
           onHide={()=>setEditPopup(false)}
           activEditDetail={activEditDetail}
          />
        )
      }

      {
        deleteProductModal && (
          <DeleteProduct
           show={deleteProductModal}
           onHide={()=>setDeleteProductModal(false)}
           activEditDetail={activEditDetail}
          />
        )
      }

    </div>
  )
}

export default DashboardTable
