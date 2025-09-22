import {Outlet} from "react-router";
import {Menu} from "../components/Menu.tsx";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};