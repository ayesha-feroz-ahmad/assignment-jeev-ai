import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';

const initialState = {
   addTaskData:[],
   taskCreated:false
}

const HomePageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setAddTask(state, action) {
      state.addTaskData = action.payload
    },
    setTaskCreated(state,action){
      state.taskCreated=action.payload
    }
   
  }
})


// reducers exports
export const {setAddTask , setTaskCreated} = HomePageSlice.actions;

export default HomePageSlice.reducer;