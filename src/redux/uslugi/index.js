import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetUslugi = createAsyncThunk("uslugi/get", async () => {
  return await axios.get(`${API_URL}/uslugiy`).then((response) => response.data);
});

const UslugiSlice = createSlice({
  name: "user",
  initialState: {
    getuslugi: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetUslugi.pending]: (state, action) => {
      state.getuslugi.Loading = true;
    },
    [GetUslugi.fulfilled]: (state, action) => {
      state.getuslugi.Success = true;
      state.getuslugi.Loading = false;
      state.getuslugi.Error = false;
      state.getuslugi.Data = action.payload;
    },
    [GetUslugi.rejected]: (state, action) => {
      state.getuslugi.Success = false;
      state.getuslugi.Loading = false;
      state.getuslugi.Error = true;
      state.getuslugi.Data = [];
    },
  },
});
export const {} = UslugiSlice.actions;
export default UslugiSlice.reducer;
