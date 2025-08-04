import type {IUser} from "../models/IUser.tsx";

export const getUsers = async   ():Promise<IUser[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return users;
}