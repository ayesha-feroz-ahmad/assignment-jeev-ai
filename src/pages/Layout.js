import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Charts from './Charts/Charts'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login'

function Layout() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/charts" element={<Charts />} />
    </Routes>
    </>
  
    )
}

export default Layout
