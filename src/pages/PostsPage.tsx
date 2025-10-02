import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import type {IPost} from "../models/IPost.ts";
import {postActions} from "../redux/slices/postSlice.ts";

export const PostsPage = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    useEffect(() => {

        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            {posts.map((post: IPost) => (<div key={post.id}>{post.body}</div>))}
        </div>
    );
};