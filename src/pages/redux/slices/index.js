import { combineReducers } from "@reduxjs/toolkit";

// slices imports
import DashboardSlice from "./dashboardSlice";



// combine reducer
const MainReducer = combineReducers({

  dashboard: DashboardSlice
});

export const rootReducer = (state, action) => {
  if (action.type === "DESTROY_SESSION") {
    state = undefined
  }
  return MainReducer(state, action);
}