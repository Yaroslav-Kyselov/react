import {Outlet} from "react-router";
import MenuComponent from "../menu/MenuComponent.tsx";

export const MainLayout=()=> {
    return <>
        <MenuComponent/>
        <Outlet/>

    </>;
}