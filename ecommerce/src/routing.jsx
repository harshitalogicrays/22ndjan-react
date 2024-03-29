import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import Login from "./features/Login";
import Register from "./features/Register";
import Pagenotfound from "./features/Pagenotfound";
import DefaultDashboard from "./features/DefaultDashboard";
import Products from "./features/Products";
import Dashboard from "./features/Admin/Dashboard";
import AdminLayout from "./features/Admin/AdminLayout";
import AddProduct from "./features/Admin/AddProduct";
import ViewProducts from "./features/Admin/ViewProducts";

 const router=createBrowserRouter([
    {
        path:'/', element:<App/> , 
        children:[
            {path:'', element:<DefaultDashboard><Home/></DefaultDashboard> },
            {path:'login', element:<Login/>},
            {path:'register', element:<Register/>},
            {path:'products', element:<DefaultDashboard><Products/></DefaultDashboard>},
            {path:'admin',element:<AdminLayout><Dashboard/></AdminLayout>,
                children:[
                    {path:'',element:<Dashboard/>},
                    {path:'addproduct',element:<AddProduct/>},
                    {path:'viewproducts',element:<ViewProducts/>}
                ]
            },
            {path:'*', element:<Pagenotfound/>}
        ]
    }
 ])

 export default router