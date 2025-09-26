import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log("users")
    const [users, setUsers] = useState([])

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

            <UserComponent foo={foo}/>
        </div>
    );
};