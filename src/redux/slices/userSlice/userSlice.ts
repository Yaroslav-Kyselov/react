import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";

type UsersSliceTypa = {
    users: IUser[];
}

const initialState: UsersSliceTypa = {users: []};


const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {

        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json());

            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
        }

    });
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
})
export const userSliceActions = {...userSlice.actions, loadUsers}