import { lazy } from "react";

const Home = lazy(() => import("./../layouts/Home/index"))
const About = lazy(() => import("./../layouts/About/index"))
const Contact = lazy(() => import("./../layouts/Contact/index"))
const Ratings = lazy(() => import("../layouts/Ratings/index"))
const Ranking = lazy(() => import("../layouts/Ranking/index"))
const Analytics = lazy(() => import("../layouts/analytics/index"))
const Agency = lazy(() => import("../layouts/Agency/index"))
const Methodology = lazy(() => import("../layouts/Methodology/index"))
const Uslugi = lazy(() => import("../layouts/uslugi/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 2,
        path : "/about",
        component : <About/>
    },
    {
        id : 3,
        path : "/contact",
        component : <Contact/>
    },
    {
        id : 4,
        path : "/ratings",
        component : <Ratings/>
    },
    {
        id: 5,
        path: "/ranking",
        component: <Ranking/>
    },
    {
        id: 6,
        path: "/analytics",
        component: <Analytics/>
    },
    {
        id: 7,
        path: "/agency",
        component: <Agency/>
    },
    {
        id: 8,
        path: '/methodology',
        component : <Methodology/>
    },
    {
        id: 9,
        path: '/uslugi',
        component : <Uslugi/>
    }

]