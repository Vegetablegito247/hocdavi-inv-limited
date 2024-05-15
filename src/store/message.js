import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const postMessage = createAsyncThunk('message/postMessage', async (userMsg) => {
    try {
        const response = await axios.post(`https://hocda-server.vercel.app/createMsg`, userMsg);
        return response.data;
    }
    catch (error) {
        throw error?.response?.data?.error || "An error occured while posting message";
    }
});

export const fetchMsg = createAsyncThunk('message/fetchMsg', async (_, { getState }) => {
    try {
        const { token } = getState().admin.user;
        const response = await axios.get(`https://hocda-server.vercel.app/getMsg`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch (error) {
        throw error?.response?.data?.error || "An error occured while fetching message";
    }
});

const initialState = {
    message: [],
    status: "idle",
    error: null
}

const msgSlice = createSlice({
    name: "message",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMsg.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(fetchMsg.fulfilled, (state, action) => {
            state.status = "Succeeded";
            state.message = action.payload;
            state.error = null;
        })
        .addCase(fetchMsg.rejected, (state, action) => {
            state.status = "Failed";
            state.message = [];
            state.error = action.error.message;
        })
        .addCase(postMessage.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(postMessage.fulfilled, (state, action) => {
            state.status = "Succeeded";
            state.message.push(action.payload);
            state.error = null;
        })
        .addCase(postMessage.rejected, (state, action) => {
            state.status = "Failed";
            state.message = [];
            state.error = action.error.message;
        })
    }
});

export default msgSlice.reducer;