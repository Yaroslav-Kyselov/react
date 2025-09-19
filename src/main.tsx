import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children:[
            {path:'cars', element:<CarsPage/>}
        ]
    }
])
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
