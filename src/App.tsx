import './App.css'
import {type FC, useEffect} from "react";
import {getAllUsers} from "./services/user.service.ts";

const App: FC = () => {

    useEffect(() => {
        getAllUsers().then(value => console.log(value))
    }, []);

    return (
        <>

        </>
    );
}

export default App
