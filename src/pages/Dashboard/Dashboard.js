import React, { useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import AddProduct from './AddProduct'
import DashboardTable from './DashboardTable'

function Dashboard() {
const [addProduct,setAddProduct]=useState(false)
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <NavBar />
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <button className='btn btn-primary' onClick={()=>setAddProduct(true)}>Add Product</button>
            </div>
            <DashboardTable  />
          </div>
        </div>
      </div>

      {
        addProduct && (
          <AddProduct
           show={addProduct}
           onHide={()=>setAddProduct(false)}
          />
        )
      }
      
    </div>


  )
}

export default Dashboard
