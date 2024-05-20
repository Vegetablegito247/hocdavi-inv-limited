import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logUser = createAsyncThunk('user/logUser', async (usercredential) => {
    try {
        const response  = await axios.post(`https://hocda-server.vercel.app/login`, usercredential);
        return response.data;
    }
    catch (error) {
        throw error?.response?.data?.error || "An error occured while logging in";
    }
});

export const signUser = createAsyncThunk('user/signUser', async (usercredential) => {
    try {
        const response = await axios.post(`https://hocda-server.vercel.app/signup`, usercredential);
        return response.data;
    }
    catch (error) {
        throw error?.response?.data?.error || "An error occured while signing up";
    }
})

const initialState = {
    admin: [],
    status: "idle",
    error: null
}

const userSlice = createSlice({
    name: "admin",
    initialState: initialState,
    reducers: {
        logUserOut: (state) => {
            state.user = [];
            state.status = "idle";
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logUser.pending, (state) => {
            state.status = "loading"
        })
        .addCase(logUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
            state.error = null;
        })
        .addCase(logUser.rejected, (state, action) => {
            state.status = "Failed";
            state.user = [];
            state.error = action.error.message;
        })
        .addCase(signUser.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(signUser.fulfilled, (state, action) => {
            state.status = "Succeeded";
            state.user = action.payload;
            state.error = action.error.message;
        })
        .addCase(signUser.rejected, (state, action) => {
            state.status = "Failed";
            state.user = [];
            state.error = action.error.message;
        })
    }
})

export const { logUserOut } = userSlice.actions;
export default userSlice.reducer;