import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  entries: [],
  // JSON.parse(localStorage.getItem("array")) ||
  // [{
  //   _id: uuidv4(),
  //   nombre:'Gabriel',
  //   telefono:'1544494024',
  //   status:'nuevo',
  //   email: 'siloni@yahoo.com',
  // },
  // {
  //   _id: uuidv4(),
  //   nombre:'Sapo Pepe',
  //   telefono:'154584024',
  //   status:'nuevo',
  //   email: 'ggoliger@yahoo.com',
  // }
  //],
  isDragging: false,
}

const rootReducer = createReducer(initialState, (builder) => {
  builder

                          ///////////////
                         //  ACCIONES //   
                        ////////////////

    .addCase(actions.ISDRAGGING, (state, action) => {
      state.isDragging=action.payload
    })

    .addCase(actions.GETENTRIES.fulfilled, (state, action) => {
      state.entries=[]
      state.entries=action.payload
    })

    .addCase(actions.NEWENTRY.fulfilled, (state, action) => {
      state.entries=[]
      state.entries=action.payload
    })

    .addCase(actions.STATEENTRY.fulfilled, (state, action) => {
      state.entries=[]
      state.entries=action.payload
    })

    // .addCase(actions.NEWLEAD, (state, action) => {
    //   state.entries.push(action.payload)
    //   localStorage.setItem("array", JSON.stringify(state.entries));
    // })

    // .addCase(actions.UPDATEENTRY, (state, action) => {
    //   console.log("action es:",action.payload)
    //   state.entries=state.entries.map((entry) =>{
    //   if(entry._id === action.payload[0]._id){
    //     entry.status=action.payload.status
    //     return entry
    //   }
    //   return entry
    //  })
    //  localStorage.setItem("array", JSON.stringify(state.entries));
    // })

})
export default rootReducer