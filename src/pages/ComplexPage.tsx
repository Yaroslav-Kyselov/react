import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice.ts";
import {commentActions} from "../redux/slices/commentSlice.ts";
import {postActions} from "../redux/slices/postSlice.ts";
import {UserComponent} from "../components/UserComponent.tsx";
import {PostComponent} from "../components/PostComponent.tsx";
import {CommentComponent} from "../components/CommentComponent.tsx";
import type {IUser} from "../models/IUser.ts";

export const ComplexPage = () => {

    const dispatch = useAppDispatch();

    const {
        commentStoreSlice: {comments},
        userStoreSlice: {users},
        postStoreSlice: {posts}
    } = useAppSelector(state => state);

    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers());
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments());
        }


    }, [])

    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
            <hr/>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
            <hr/>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}

        </div>
    );
};