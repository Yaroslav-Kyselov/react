import type {IComment} from "../models/IComment.ts";

export const CommentComponent = ({comment}:{comment:IComment}) => {
    return (
        <div>
            {comment.id} {comment.name}
            <p>{comment.body}</p>
            <p>{comment.email}</p>
        </div>
    );
};