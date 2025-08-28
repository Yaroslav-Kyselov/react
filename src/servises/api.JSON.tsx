import type {ICommentsModelJson} from "../models/JSON/comments/ICommentsModelJson.tsx";
import type {IPostsModelJson} from "../models/JSON/posts/IPostsModelJson.tsx";
import type {IUsersModelJson} from "../models/JSON/users/IUsersModelJson.tsx";


const endpointJSON = import.meta.env.VITE_API_URL_JSON;



const endpointCommentsJSON = endpointJSON + '/comments';
export const LoadCommentsJSON = async (): Promise<ICommentsModelJson[]> => {
    return await fetch(endpointCommentsJSON)
        .then(value => value.json())

}

const endpointPostsJSON = endpointJSON + '/posts';
export const LoadPostsJSON = async (): Promise<IPostsModelJson[]> => {
    return await fetch(endpointPostsJSON)
        .then(value => value.json())

}

const endpointUsersJSON = endpointJSON + '/users';
export const LoadUsersJSON = async (): Promise<IUsersModelJson[]> => {
    return await fetch(endpointUsersJSON)
        .then(value => value.json())

}