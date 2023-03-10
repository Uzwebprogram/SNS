import { lazy } from "react";
import Cookies from "universal-cookie/cjs/Cookies";
const Home = lazy(() => import("./../layouts/Home/index"));
const About = lazy(() => import("./../layouts/About/index"));
const Contact = lazy(() => import("./../layouts/Contact/index"));
const Ratings = lazy(() => import("../layouts/Ratings/index"));
const Ranking = lazy(() => import("../layouts/Ranking/index"));
const Analytics = lazy(() => import("../layouts/analytics/index"));
const Agency = lazy(() => import("../layouts/Agency/index"));
const Methodology = lazy(() => import("../layouts/Methodology/index"));
const Uslugi = lazy(() => import("../layouts/uslugi/index"));
const Faq = lazy(() => import("../layouts/faq/index"));
const Disclosure = lazy(() => import("../layouts/disclosure"));
const RatingNeeded = lazy(() => import("../layouts/rating-needed/index"));
const RatingScales = lazy(() => import("../layouts/rating-scales/index"));
const Details = lazy(() => import("../layouts/details/index"));
const CompanyProfile = lazy(() => import("../layouts/company-profile/index"));
const AnalyticMore = lazy(() => import("../layouts/analytic-more/index"));
const PersonalCabinet = lazy(() => import("../layouts/personal-cabinet/index"));
const WhatIsRanking = lazy(() => import("../layouts/what-is-ranking/index"));
const RankingProfile = lazy(() => import("../layouts/ranking-profile/index"));
const WhatIsRating = lazy(() => import("../layouts/what-is-rating/index"))

const cookies = new Cookies();

const personalData = cookies.get("AuthDataUser");

export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/about",
    component: <About />,
  },
  {
    id: 3,
    path: "/contact",
    component: <Contact />,
  },
  {
    id: 4,
    path: "/ratings",
    component: <Ratings />,
  },
  {
    id: 5,
    path: "/ranking",
    component: <Ranking />,
  },
  {
    id: 5,
    path: "/ranking/:CategoryName",
    component: <Ranking />,
  },
  {
    id: 5,
    path: "/ranking/:CategoryName/:atributs",
    component: <Ranking />,
  },
  {
    id: 5,
    path: "/ranking/:CategoryName/:atributs/:Year1/:Year2",
    component: <Ranking />,
  },
  {
    id: 6,
    path: "/analytics",
    component: <Analytics />,
  },
  {
    id: 7,
    path: "/agency",
    component: <Agency />,
  },
  {
    id: 8,
    path: "/methodology",
    component: <Methodology />,
  },
  {
    id: 9,
    path: "/uslugi",
    component: <Uslugi />,
  },
  {
    id: 10,
    path: "/faq",
    component: <Faq />,
  },
  {
    id: 11,
    path: "/disclosure",
    component: <Disclosure />,
  },
  {
    id: 12,
    path: "/ratingneeded",
    component: <RatingNeeded />,
  },
  {
    id: 13,
    path: "/ratingscales",
    component: <RatingScales />,
  },
  {
    id: 14,
    path: "/details",
    component: <Details />,
  },
  {
    id: 15,
    path: "/companyprofile/:id",
    component: <CompanyProfile />,
  },
  {
    id: 16,
    path: "/analyticmore/:id",
    component: <AnalyticMore />,
  },
  {
    id: 17,
    path: "/lichniykabinet",
    component: <PersonalCabinet />,
  },
  {
    id: 18,
    path: "/whatisranking",
    component: <WhatIsRanking/>
  },
  {
    id: 19,
    path: "/rankingprofile/:id",
    component: <RankingProfile/>
  },
  {
    id: 20,
    path: "/whatisrating",
    component: <WhatIsRating/>
  }
];
