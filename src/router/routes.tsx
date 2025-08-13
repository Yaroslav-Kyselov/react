import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import Users from "../pages/Users.tsx";
import Posts from "../pages/Posts.tsx";
import Comments from "../pages/Comments.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {
                path: 'users', element: <Users/>, children: [
                    {path: 'jsonplaceholder', element: <div>JSON Placeholder Users</div>},
                    {path: 'dummyjson', element: <div>DummyJson Users</div>},
                ]
            },
            {
                path: 'posts', element: <Posts/>, children: [
                    {path: 'jsonplaceholder', element: <div>JSON Placeholder Posts</div>},
                    {path: 'dummyjson', element: <div>DummyJson Posts</div>},
                ]
            },
            {path: 'comments', element: <Comments/>},

        ]
    }
])