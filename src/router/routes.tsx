import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import {JsonComments} from "../components/CommentsComponent/JsonComment/JsonComments.tsx";
import DummyComments from "../components/CommentsComponent/DummyComment/DummyComments.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>JSON Placeholder Users</div>},
                    {path: 'dummyjson', element: <div>DummyJson Users</div>},
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>JSON Placeholder Posts</div>},
                    {path: 'dummyjson', element: <div>DummyJson Posts</div>},
                ]
            },
            {path: 'comments', element: <CommentsPage/>, children:[
                    {path: 'jsonplaceholder', element: <JsonComments/>},
                    {path: 'dummyjson', element: <DummyComments/>},
                ]},

        ]
    }
])