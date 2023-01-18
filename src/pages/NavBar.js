import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDashboardData, setFilteredData } from './redux/slices/dashboardSlice'

function NavBar() {
  const dispatch=useDispatch()
  const { dashboardData , filteredData } = useSelector(state => state.dashboard)
  const [searchText, setSearchText] = useState('')

  useEffect(()=>{
    filterData()
  },[searchText])

  function filterData(){
    let filteredData = dashboardData
    if(searchText){
    filteredData = dashboardData.filter((item)=>{
      return item.category.toLowerCase().indexOf(searchText.toLowerCase())!==-1 || item.title.toLowerCase().indexOf(searchText.toLowerCase())!==-1
    })
  }
   dispatch(setFilteredData(filteredData))
  }
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    {/* Topbar Search */}
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div className="input-group">
        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form>
    {/* Topbar Navbar */}
    <ul className="navbar-nav ml-auto">
      {/* Nav Item - User Information */}
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Ayesha Ahmad</span>
          <img className="img-profile rounded-circle" src="../assets/images/undraw_profile.svg" />
        </a>
        {/* Dropdown - User Information */}
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a className="dropdown-item" >
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
            Profile
          </a>
          <a className="dropdown-item" >
            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
            Settings
          </a>
          <a className="dropdown-item" >
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
            Activity Log
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
  )
}

export default NavBar
