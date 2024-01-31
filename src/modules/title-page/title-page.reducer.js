import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "/src/utils/apiv1.js"
import axios from "axios";

const initialState = {
    loading: false,
    titleData: {},
    error: ''
}

export const fetchTitle = createAsyncThunk('title/fetchTitle', search => {
    return api.get('', search)
    // return axios
    //     .get(`http://127.0.0.1:8000/${search}`)
    //     .then(response => response.data)
})

const titlePageSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
      empty: (state) => {
          state = initialState
      }
    },
    extraReducers: builder => {
        builder.addCase(fetchTitle.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchTitle.fulfilled, (state, action) => {
            state.loading = false
            state.titleData = action.payload
            state.error = ''
        })
        builder.addCase(fetchTitle.rejected, (state, action) => {
            state.loading = false
            state.titleData = {}
            state.error = action.error.message
        })
    }
})

export default titlePageSlice.reducer
export const { empty } = titlePageSlice.actions
