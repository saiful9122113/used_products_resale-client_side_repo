import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Blogs from "../Pages/Blog/Blog";
import Android from "../Pages/CategoryData/Android/Android";
import Button from "../Pages/CategoryData/Button/Button";
import Landline from "../Pages/CategoryData/Landline/Landline";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Category from "../Pages/Home/Categories/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyProduct from "../Pages/MyProduct/MyProduct";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/category/1',
                element: <Android></Android>
            },
            {
                path: '/category/2',
                element: <Landline></Landline>
            },
            {
                path: '/category/3',
                element: <Button></Button>
            },
            
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },

])


export default router;