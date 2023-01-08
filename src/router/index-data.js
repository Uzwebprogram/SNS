import { lazy } from "react";

const Home = lazy(() => import("./../layouts/Home/index"))
const About = lazy(() => import("./../layouts/About/index"))
const Contact = lazy(() => import("./../layouts/Contact/index"))
const Ratings = lazy(() => import("../layouts/Ratings/index"))

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
]