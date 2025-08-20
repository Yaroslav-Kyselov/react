
import type {IPost} from "../../models/IPost.ts";

export const PostComponent= ({post}: { post: IPost }) => {
    return (
        <div>
            {post.title}
        </div>
    );
}