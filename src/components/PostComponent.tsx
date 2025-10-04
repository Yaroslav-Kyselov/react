import type {IPost} from "../models/IPost.ts";

export const PostComponent = ({post}:{post: IPost}) => {
    return (
        <div>
            {post.id} {post.title}
            <p>{post.body}</p>
        </div>
    );
};