import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";
import type {IUser} from "./models/IUser.tsx";
import {User} from "./componets/User.tsx";


function App() {

    const users = useFetch<IUser[]>
    ('https://jsonplaceholder.typicode.com/users', []);

    return (
        <>
            {
                users.map((user) => <User key={user.id} user={user}/>)
            }

        </>
    );
}

export default App
