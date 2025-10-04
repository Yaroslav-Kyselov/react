import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/commentSlice.ts";
import type {IComment} from "../models/IComment.ts";
import {CommentComponent} from "../components/CommentComponent.tsx";

export const CommentsPage = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    useEffect(() => {

        dispatch(commentActions.loadComments())
    }, []);


    return (
        <div>
            {comments.map((comment:IComment) => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};