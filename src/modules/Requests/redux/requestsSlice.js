import { createSlice } from "@reduxjs/toolkit";
import { sendQuestionThunk, sendOrderThunk, sendFileThunk } from "./thunks";

export const questionSlice = createSlice({
  name: "QUESTION",
  initialState: {
    loading: false,
    error: false,
  },
  extraReducers: {
    //middleware
    [sendQuestionThunk.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [sendQuestionThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
    },
    [sendQuestionThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    [sendOrderThunk.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [sendOrderThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
    },
    [sendOrderThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const requestsActionTypes = {
  ...questionSlice.actions,
  sendQuestionThunk,
  sendOrderThunk,
  sendFileThunk,
};

export default questionSlice.reducer;
