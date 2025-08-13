import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import Users from "../pages/Users.tsx";
import Posts from "../pages/Posts.tsx";
import Products from "../pages/Products.tsx";
import Comments from "../pages/Comments.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <Users/>},
            {path: 'posts', element: <Posts/>},
            {path: 'products', element: <Products/>},
            {path: 'comments', element: <Comments/>},

        ]
    }
])