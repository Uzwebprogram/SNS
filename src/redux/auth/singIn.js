

import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
import Cookies from "universal-cookie";
    const cookies = new Cookies();
export const Register = createAsyncThunk('user/register' , async function(body, {rejectWithValue}){
    try {
        const res = await axios.post(`${API_URL}/register` , body)
        return {
            verifyCodeSuccess : res.data?.token,
            verifyUserData : res.data?.data
        }
    } catch (error) {
        return  rejectWithValue(error)
    }
})
export const Users = createAsyncThunk('user/get' , async() =>{
    return await axios.get(`${API_URL}/users`)
    .then(response => response.data)
})

const UserSlice = createSlice({
    name : "user",
    initialState:{
        Register:{
            Error : "",
            Success : false,
            Loading : false,
            Token : "",
            UserData : [],
        },
        Users:{
            Error : false,
            Success : false,
            Loading : false,
            Data : []
        }
    },
    reducers:{
        addToken:(state , action) =>{
            state.verifyCodeSuccess = cookies.get("AuthTokenUser")
        },
    },
    extraReducers :{
            [Register.pending]:(state , action) =>{
                state.Register.Loading = true
            },
            [Register.fulfilled]:(state , action) =>{
                state.Register.Success = true
                state.Register.Loading = false
                state.Register.Error = false
                state.Register.Token = cookies.set("AuthTokenUser", action.payload.verifyCodeSuccess) 
                state.Register.UserData = cookies.set("AuthDataUser", action.payload.verifyUserData) 
            },
            [Register.rejected]:(state , action) =>{
                state.Register.Success = false
                state.Register.Loading = false
                state.Register.Error = action.payload
                state.Register.Token = ''
            }
    }
})
export const {addToken} = UserSlice.actions;
export default UserSlice.reducer