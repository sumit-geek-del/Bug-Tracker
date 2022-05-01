import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:'Sumit Kumar'})
            state.push({name:"Divyanshu Mittal"})
        }
    }
})

export default slice.reducer;

export const {getUser} = slice.actions