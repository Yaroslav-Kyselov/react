import type {IUser} from "../models/IUser.ts";

export const baseUrl = import.meta.env.VITE_BASE_URL

export const getAll = async (page: string): Promise<IUser> => {
    const limit = 30;
    const skip =limit*(+page)-limit;
    return await fetch(baseUrl + '/users' + '?skip=' + skip).then(res => res.json())
}

