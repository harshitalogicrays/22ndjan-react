import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import Login from "./features/Login";
import Register from "./features/Register";
import Pagenotfound from "./features/Pagenotfound";
import DefaultDashboard from "./features/DefaultDashboard";
import Products from "./features/Products";
import Dashboard from "./features/Admin/Dashboard";

 const router=createBrowserRouter([
    {
        path:'/', element:<App/> , 
        children:[
            {path:'', element:<DefaultDashboard><Home/></DefaultDashboard> },
            {path:'login', element:<Login/>},
            {path:'register', element:<Register/>},
            {path:'products', element:<DefaultDashboard><Products/></DefaultDashboard>},
            {path:'admin',element:<Dashboard/>},
            {path:'*', element:<Pagenotfound/>}
        ]
    }
 ])

 export default router