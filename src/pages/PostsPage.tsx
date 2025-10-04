import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import type {IPost} from "../models/IPost.ts";
import {postActions} from "../redux/slices/postSlice.ts";
import {PostComponent} from "../components/PostComponent.tsx";

export const PostsPage = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    useEffect(() => {

        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            {posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};