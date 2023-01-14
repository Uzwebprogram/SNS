import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "./auth/singIn"
import AnalyticSlice from './analytic/index'
export const store = configureStore({
    reducer:{
        userRegister : UserSlice,
        analytic: AnalyticSlice
    }
})