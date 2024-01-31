import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "/src/utils/apiv1.js"

const initialState= {
    loading: false,
    data: [],
    error: '',
}

export const fetchRecommendations = createAsyncThunk('recommendations/fetchRecommendations', () => {
    return api.get()
})

const homePageReducer = createSlice({
    name: 'recommendations',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchRecommendations.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchRecommendations.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchRecommendations.rejected, (state, action) => {
            state.loading = false
            state.data= []
            state.error = action.error.message
        })
    }
})

export default homePageReducer.reducer
