import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import {JsonComments} from "../components/CommentsComponent/JsonComment/JsonComments.tsx";

import {JsonUsers} from "../components/UsersComponent/JsonUsers/JsonUsers.tsx";
import {JsonPosts} from "../components/PostsComponent/JsonPosts/JsonPosts.tsx";
import {DummyComments} from "../components/CommentsComponent/DummyComment/DummyComments.tsx";
import {DummyPosts} from "../components/PostsComponent/DummyPosts/DummyPosts.tsx";
import {DummyUsers} from "../components/UsersComponent/DummyUsers/DummyUsers.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [

            {path: 'users', element: <UsersPage/>},
            {path: 'users/jsonplaceholder', element: <JsonUsers/>},
            {path: 'users/dummyjson', element: <DummyUsers/>},


            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/jsonplaceholder', element: <JsonPosts/>},
            {path: 'posts/dummyjson', element: <DummyPosts/>},


            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments/jsonplaceholder', element: <JsonComments/>},
            {path: 'comments/dummyjson', element: <DummyComments/>},


        ]
    }
])