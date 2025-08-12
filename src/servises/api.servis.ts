import type {IUser} from "../model/IUser.ts";
import {urls} from "../constants/urls.tsx";
import type {IPost} from "../model/iPost.ts";


export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getUserById: async (id: number): Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then(res => res.json())
    }
}

export const postService = {

    getAllPostsOfUserId:async (id: number):Promise<IPost[]> => {

        return await fetch(urls.posts.userPostsById(id))
            .then(res => res.json())
    }
}