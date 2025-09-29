import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/IUser.ts";

type UsersSliceTypa = {
    users: IUser[];
}

const initialState: UsersSliceTypa = {users: []};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        }
    }
})
export const userSliceActions = {...userSlice.actions}