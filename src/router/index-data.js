import { lazy } from "react";

const Home = lazy(() => import("./../layouts/Home/index"))
const About = lazy(() => import("./../layouts/About/index"))
const Contact = lazy(() => import("./../layouts/Contact/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 1,
        path : "/about",
        component : <About/>
    },
    {
        id : 1,
        path : "/contact",
        component : <Contact/>
    },
]