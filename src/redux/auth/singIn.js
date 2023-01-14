import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const Register = createAsyncThunk('user/register' , async(body)=>{
    console.log(body);
    return await axios.post(`${API_URL}/register` , body)
    .then(res => res)
})
export const Users = createAsyncThunk('user/get' , async() =>{
    return await axios.get(`${API_URL}/users`)
    .then(response => response.data)
})

const UserSlice = createSlice({
    name : "user",
    initialState:{
        Register:{
            Error : false,
            Success : false,
            Loading : false,
            Token : ""
        },
        Users:{
            Error : false,
            Success : false,
            Loading : false,
            Data : []
        }
    },
    extraReducers :{
            [Register.pending]:(state , action) =>{
                state.Register.Loading = true
            },
            [Register.fulfilled]:(state , action) =>{
                state.Register.Success = true
                state.Register.Loading = false
                state.Register.Error = false
                state.Register.Token = action.payload
            },
            [Register.rejected]:(state , action) =>{
                state.Register.Success = false
                state.Register.Loading = false
                state.Register.Error = true
                state.Register.Token = ''
            }
    }
})
export const {} = UserSlice.actions;
export default UserSlice.reducer