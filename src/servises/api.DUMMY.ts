import type {CommentsDummy, ICommentsModelDummy} from "../models/DUMMY/comments/ICommentsModelDummy.tsx";
import type {IPostsModelDummy, PostsDummy} from "../models/DUMMY/posts/IPostsModelDummy.tsx";
import type {IUsersModelDummy, UsersDummy} from "../models/DUMMY/users/IUsersModelDummy.ts";

const endpointDUMMY = import.meta.env.VITE_API_URL_DUMMY;

const endpointCommentsDUMMY = endpointDUMMY + '/comments';
export const LoadCommentsDUMMY = async (): Promise<CommentsDummy[]> => {
    const response: ICommentsModelDummy = await fetch(endpointCommentsDUMMY)
        .then(value => value.json());
    return response.comments;
}

const endpointPostsDUMMY = endpointDUMMY + '/posts';
export const LoadPostsDUMMY = async (): Promise<PostsDummy[]> => {
    const response: IPostsModelDummy = await fetch(endpointPostsDUMMY)
        .then(value => value.json());
    return response.posts;
}


const endpointUsersDUMMY = endpointDUMMY + '/users';
export const LoadUsersDUMMY = async (): Promise<UsersDummy[]> => {
    const response: IUsersModelDummy = await fetch(endpointUsersDUMMY)
        .then(value => value.json());
    return response.users;
}