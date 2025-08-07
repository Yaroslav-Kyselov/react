import type {FC} from "react";
import type {ICommentModel} from "../../models/CommentsModel.tsx";


export const Comment: FC<{ comment: ICommentModel }> = ({comment: {postId, id, name, email, body}}) => {


    return (
        <div>
            <h3>Comment #{id} for Post #{postId}</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Body:</strong> {body}</p>
        </div>
    );
}
// export default Comment;