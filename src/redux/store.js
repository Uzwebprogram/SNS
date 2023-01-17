import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./auth/singIn";
import AnalyticSlice from "./analytic/index";
import UslugiSlice from "./uslugi/index";
import MethodologySlice from './methodology/index'

import UserLogin from "./auth/singUp";
export const store = configureStore({
  reducer: {
    userRegister: UserSlice,
    userLogin: UserLogin,
    analytic: AnalyticSlice,
    uslugi: UslugiSlice,
    methodology: MethodologySlice
  },
});
