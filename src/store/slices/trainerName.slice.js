import { createSlice } from "@reduxjs/toolkit";

export const trainerName = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setNameTrainer: (state, action) => action.payload
    }
})

export const {setNameTrainer} = trainerName.actions
export default trainerName.reducer