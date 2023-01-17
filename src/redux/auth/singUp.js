import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
import Cookies from "universal-cookie";
    const cookies = new Cookies();
export const Login = createAsyncThunk('user/Login' , async function(body, {rejectWithValue}){
    try {
        const res = await axios.post(`${API_URL}/login` , body)
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

const UserLogin = createSlice({
    name : "user",
    initialState:{
        Login:{
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
            [Login.pending]:(state , action) =>{
                state.Login.Loading = true
            },
            [Login.fulfilled]:(state , action) =>{
                state.Login.Success = true
                state.Login.Loading = false
                state.Login.Error = false
                state.Login.Token = cookies.set("AuthTokenUser", action.payload.verifyCodeSuccess) 
                state.Login.UserData = cookies.set("AuthDataUser", action.payload.verifyUserData) 
            },
            [Login.rejected]:(state , action) =>{
                state.Login.Success = false
                state.Login.Loading = false
                state.Login.Error = action.payload
                state.Login.Token = ''
            }
    }
})
export const {addToken} = UserLogin.actions;
export default UserLogin.reducer