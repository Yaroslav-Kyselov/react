import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/userSlice.ts";
import {commentActions} from "../redux/slices/commentSlice.ts";
import {postActions} from "../redux/slices/postSlice.ts";

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
            {users.map(user => (
                <div key={user.id} style={{marginBottom: 20}}>
                    <h2> {user.name}</h2>
                    {posts
                        .filter(p => p.userId === user.id)
                        .map(post => (
                            <div key={post.id} style={{marginLeft: 20}}>
                                <h4> {post.title}</h4>
                                <p>{post.body}</p>
                                <h5> Comments:</h5>
                                <ul>
                                    {comments
                                        .filter(c => c.postId === post.id)
                                        .map(c => (
                                            <li key={c.id}>{c.body}</li>
                                        ))}
                                </ul>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
};