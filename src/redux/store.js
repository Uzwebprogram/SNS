import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "./auth/singIn"
export const store = configureStore({
    reducer:{
        userRegister : UserSlice
    }
})