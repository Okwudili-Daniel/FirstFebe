import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import Alphabet from "../pages/alphabet";
import Numbers from "../pages/numbers";
import Shape from "../pages/shape";



export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element: <HomeScreen/>
    },
    {
        path:"/alphabet",
        element: <Alphabet/>
    },
    {
        path:"/number",
        element: <Numbers/>
    },
    {
        path:"/shape",
        element: <Shape/>
    }
])