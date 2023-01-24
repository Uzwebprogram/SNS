import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetFaq = createAsyncThunk("faq/get", async () => {
  return await axios.get(`${API_URL}/vopros`).then((response) => response.data);
});

const FaqSlice = createSlice({
  name: "user",
  initialState: {
    getfaq: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetFaq.pending]: (state, action) => {
      state.getfaq.Loading = true;
    },
    [GetFaq.fulfilled]: (state, action) => {
      state.getfaq.Success = true;
      state.getfaq.Loading = false;
      state.getfaq.Error = false;
      state.getfaq.Data = action.payload;
    },
    [GetFaq.rejected]: (state, action) => {
      state.getfaq.Success = false;
      state.getfaq.Loading = false;
      state.getfaq.Error = true;
      state.getfaq.Data = [];
    },
  },
});
export const {} = FaqSlice.actions;
export default FaqSlice.reducer;
