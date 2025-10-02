import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice.ts";
import {commentActions} from "../redux/slices/commentSlice.ts";
import {postActions} from "../redux/slices/postSlice.ts";

export const ComplexPage = () => {

    const dispatch = useAppDispatch();

    const {commentStoreSlice: {comments}, userStoreSlice: {users}, postStoreSlice: {posts}} = useAppSelector(state => state);

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
        complex page
        </div>
    );
};