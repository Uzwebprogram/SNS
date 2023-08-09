import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./auth/singIn";
import AnalyticSlice from "./analytic/index";
import UslugiSlice from "./uslugi/index";
import MethodologySlice from './methodology/index'
import RankingSlice from './ranking/index'
import NewsSlice from './news/index'
import PressCenterSlice from './press-center/index'
import UserLogin from "./auth/singUp";
import BanksSlice from './bank/index'
import CategorieSlice from './categorie/index'
import FaqSlice from './faq/index'
import InformationSlice from './information/index'
import RaitingSlice from "./raiting/index"

export const store = configureStore({
  reducer: {
    userRegister: UserSlice,
    userLogin: UserLogin,
    analytic: AnalyticSlice,
    raiting : RaitingSlice,
    uslugi: UslugiSlice,
    methodology: MethodologySlice,
    ranking: RankingSlice,
    news: NewsSlice,
    pressCenter: PressCenterSlice,
    banks: BanksSlice,
    categorie: CategorieSlice,
    faq: FaqSlice,
    information: InformationSlice
  },
});
