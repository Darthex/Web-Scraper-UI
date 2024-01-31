import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "/src/utils/apiv1.js"
import {resolvePath} from "react-router-dom";

const initialState = {
    loading: false,
    urlData: [],
    error: '',
}

export const fetchUrls = createAsyncThunk('urls/fetchUrls', search => {
    return api.get('links/', `?post_url=${search}`)
})

export const fetchRecUrls = createAsyncThunk('urls/fetchRecUrls', search => {
    return api.get('select', `?search_title=${search}`)
})

const detailPageReducer = createSlice({
    name: 'urls',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUrls.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUrls.fulfilled, (state, action) => {
            state.loading = false
            state.urlData = action.payload
            state.error = ''
        })
        builder.addCase(fetchUrls.rejected, (state,action) => {
            state.loading = false
            state.urlData = []
            state.error = action.error.message
        })
    }
})

export default detailPageReducer.reducer
