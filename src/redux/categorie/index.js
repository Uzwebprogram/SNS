import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetCategorie = createAsyncThunk("categorie/get", async () => {
  return await axios
    .get(`${API_URL}/categories`)
    .then((response) => response.data);
});
export const GetCategorieId = createAsyncThunk(
  "categorie/getId",
  async (id) => {
    return await axios
      .get(`${API_URL}/categories/${id}`)
      .then((response) => response.data);
  }
);

const CategorieSlice = createSlice({
  name: "user",
  initialState: {
    getcategorie: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getcategorieId: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetCategorie.pending]: (state, action) => {
      state.getcategorie.Loading = true;
    },
    [GetCategorie.fulfilled]: (state, action) => {
      state.getcategorie.Success = true;
      state.getcategorie.Loading = false;
      state.getcategorie.Error = false;
      state.getcategorie.Data = action.payload;
    },
    [GetCategorie.rejected]: (state, action) => {
      state.getcategorie.Success = false;
      state.getcategorie.Loading = false;
      state.getcategorie.Error = true;
      state.getcategorie.Data = [];
    },
    [GetCategorieId.pending]: (state, action) => {
      state.getcategorieId.Loading = true;
    },
    [GetCategorieId.fulfilled]: (state, action) => {
      state.getcategorieId.Success = true;
      state.getcategorieId.Loading = false;
      state.getcategorieId.Error = false;
      state.getcategorieId.Data = action.payload;
    },
    [GetCategorieId.rejected]: (state, action) => {
      state.getcategorieId.Success = false;
      state.getcategorieId.Loading = false;
      state.getcategorieId.Error = true;
      state.getcategorieId.Data = [];
    },
  },
});
export const {} = CategorieSlice.actions;
export default CategorieSlice.reducer;
