import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";

type UsersSliceTypa = {
    users: IUser[];
    user: IUser | null,
    loadState:boolean,
}

const initialState: UsersSliceTypa = {users: [], user: null, loadState: false};


const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {

        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json());
            thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
        }

    }
);

const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {

        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(value => value.json());
            thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
        }

    }
);

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        changeLoadState:(state, action:PayloadAction<boolean>)=>{
            state.loadState = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            })
});
export const userSliceActions = {...userSlice.actions, loadUsers, loadUser}