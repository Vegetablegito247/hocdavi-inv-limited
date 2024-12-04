import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postTestimonial = createAsyncThunk('testimonial/postTestimonial', async (testimonialData) => {
    try {
        const response = await axios.post('https://hocda-server.vercel.app/postTestimonial', testimonialData);
        return response.data;
    }
    catch (error) {
        throw error?.response?.data?.error || "An error occured while posting testimonial";
    }
})

export const fetchTestimonial = createAsyncThunk('testimonial/fetchTestimonial', async () => {
    try {
        const response = await axios.get('https://hocda-server.vercel.app/getTestimonial');
        return response.data;
    }
    catch (error) {
        throw error?.response?.data?.error || "An error occured while fetching testimonials";
    }
})

const initialState = {
    testimonials: [],
    status: 'idle',
    error: null
}

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postTestimonial.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(postTestimonial.fulfilled, (state, action) => {
            state.status ='succeeded';
            const { data } = action.payload;
            if(data) {
                state.testimonials.push(data);
            }
            state.error = null;
        });
        builder.addCase(postTestimonial.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        });
        builder.addCase(fetchTestimonial.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(fetchTestimonial.fulfilled, (state, action) => {
            state.status ='succeeded';
            state.testimonials = action.payload;
            state.error = null;
        });
        builder.addCase(fetchTestimonial.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        });
    }
})

export default testimonialSlice.reducer;