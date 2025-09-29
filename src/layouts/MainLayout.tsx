import {Menu} from "../components/Menu.tsx";
import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};