import axios from "axios"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
export const api='http://localhost:3001/entrys'


                        /////////////////////////////////////   
                        //             ACCIONES            //   
                        ///////////////////////////////////// 



    export const ISDRAGGING=createAction('ISDRAGGING',(isDragging)=>{ 
        return {payload:isDragging}
    })

    
    export const GETENTRIES = createAsyncThunk('GETENTRIES', async () => { 
        const response = await axios(`${api}`)
        return response.data
    })
    
    
    export const STATEENTRY=createAsyncThunk('STATEENTRY',async (entry)=>{
        console.log("viendo accion entry",entry);
        const response = await axios.put(`${api}`,entry)
        return response.data
    })
    
    export const NEWENTRY=createAsyncThunk('NEWENTRY',async (input)=>{
        const response = await axios.post(`${api}`,input)
        return response.data
    })
    
    // export const UPDATEENTRY=createAction('UPDATEENTRY',(entry)=>{ 
    //     return {payload:entry}
    // })

    // export const NEWLEAD=createAction('NEWLEAD',(entry)=>{ 
    //     return {payload:entry}
    // })
    