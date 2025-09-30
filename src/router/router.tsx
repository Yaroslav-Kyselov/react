import {MainLayout} from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {createBrowserRouter, type RouteObject} from "react-router";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'user/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
        ]
    }

];
export const router = createBrowserRouter(routes);