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

            {path: 'users', element: <UsersPage/>},
            {path: 'users/jsonplaceholder', element: <div>JSON Placeholder Users</div>},
            {path: 'users/dummyjson', element: <div>DummyJson Users</div>},


            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/jsonplaceholder', element: <div>JSON Placeholder Posts</div>},
            {path: 'posts/dummyjson', element: <div>DummyJson Posts</div>},


            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments/jsonplaceholder', element: <JsonComments/>},
            {path: 'comments/dummyjson', element: <DummyComments/>},


        ]
    }
])