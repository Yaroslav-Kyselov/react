import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
    console.log("users")
    const [users, setUsers] = useState([])

    const arr:number[]=useMemo(() => {
        return [11,22,33]
    }, []);

    const foo = useCallback(() => {
        console.log('foo test')
    }, [])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            UsersComponent

            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};