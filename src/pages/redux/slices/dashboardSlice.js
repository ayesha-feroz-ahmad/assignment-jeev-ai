import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardData: [],
  filteredData:[]
}

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData(state, action) {
      state.dashboardData = action.payload
    },

    setFilteredData(state,action){
      state.filteredData=action.payload
    },

    addProductData(state,action){
      state.filteredData = [action.payload,...state.filteredData]
    },

    deleteDashboardData(state, action) {
      if (action.payload) {
        const array = [...state.dashboardData];
        const index = array.findIndex((item) => item?.id === action?.payload.id);
        array.splice(index, 1);
        state.dashboardData = [...array]
      }
    },
  }
})


// reducers exports
export const { setDashboardData, deleteDashboardData  , setFilteredData , addProductData} = DashboardSlice.actions;

export default DashboardSlice.reducer;