import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "./auth/singIn"
import AnalyticSlice from './analytic/index'
import UslugiSlice from './uslugi/index'
export const store = configureStore({
    reducer:{
        userRegister : UserSlice,
        analytic: AnalyticSlice,
        uslugi: UslugiSlice
    }
})