import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems =createAsyncThunk("items/fetchItems", async()=>{
    const response = await fetch("http://localhost:3000/savings_goals");
    if (!response.ok) {
        throw new Error("Error");
        
    }
    return response.json();
});
const initialState = {
    items: [],
    loading: false,
    error: null,
};
const dbSlice = createSlice({
    name:"savingGoals",
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
    builder
    .addCase(fetchItems.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchItems.fulfilled,(state, action)=>{
        state.loading = false;
        state.items = action.payload;

    })
    .addCase(fetchItems.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    });
    },
});
export default dbSlice.reducer






