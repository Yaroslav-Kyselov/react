import type {FC} from "react";
import type {IPostModel} from "../../models/PostModel.tsx";

export const Post:FC<{post:IPostModel}>=({post:{userId, id, title, body}})=> {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{body}</p>
            <small>Post ID: {id} | User ID: {userId}</small>
        </div>
    );
}