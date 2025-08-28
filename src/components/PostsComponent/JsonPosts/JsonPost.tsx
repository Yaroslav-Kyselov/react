import type {FC} from "react";
import type {IPostsModelJson} from "../../../models/JSON/posts/IPostsModelJson.tsx";

type PostsPropsType = {
    post: IPostsModelJson
}
export const JsonPost: FC<PostsPropsType> = ({post}) => {


    return (
        <div>
            {post.title}

        </div>
    );
};