import type {IUser} from "../models/IUser.tsx";


export const getUsers = async   ():Promise<IUser[]> => {
    const users = await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
    return users;
}

export const getUser = async   (id:string):Promise<IUser[]> => {
    return  await fetch(import.meta.env.VITE_API_URL+'/'+id)
        .then(value => value.json());

}