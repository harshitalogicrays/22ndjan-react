import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import Login from "./features/Login";
import Register from "./features/Register";
import Pagenotfound from "./features/Pagenotfound";
import DefaultDashboard from "./features/DefaultDashboard";

 const router=createBrowserRouter([
    {
        path:'/', element:<App/> , 
        children:[
            {path:'', element:<DefaultDashboard><Home/></DefaultDashboard> },
            {path:'login', element:<Login/>},
            {path:'register', element:<Register/>},


            {path:'*', element:<Pagenotfound/>}
        ]
    }
 ])

 export default router