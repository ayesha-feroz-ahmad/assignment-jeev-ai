import React from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import ColumnChart from './ColumnChart'
import DonutChart from './DonutChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import PlotterChat from './PlotterChat'
import SpiderChart from './SpiderChart'

function Charts() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <NavBar />
          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4 ">
              <h1 className="h3 mb-0 text-gray-800">Charts</h1>
            </div>

            <div className="row">
        
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Pie Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <PieChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Plotter Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <PlotterChat />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <BarChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Line Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Column Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <ColumnChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <DonutChart />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <AreaChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Spider Chart</h6>
                  </div>

                  <div className="card-body">
                    <div className="text-center">
                      <SpiderChart />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
