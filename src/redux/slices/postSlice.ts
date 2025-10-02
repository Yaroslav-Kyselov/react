import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[]
}

const initPostSliceState: PostSliceType = {posts: []};

const loadPosts = createAsyncThunk("loadPosts",
    async (_, thunkAPI) => {
        try {
            const posts = await getAll<IPost[]>('/posts');
            console.log(posts)
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('Не вдалося загрузити пости');
        }
    });


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    }),
});
export const postActions = {...postSlice.actions, loadPosts};