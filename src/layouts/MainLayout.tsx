import {Outlet} from "react-router/internal/react-server-client";
import {MenuComponent} from "../menu/MenuComponent.tsx";

export const MainLayout=()=> {
    return <div>
        <MenuComponent/>
        <Outlet/>

    </div>
}