import {createRoot} from 'react-dom/client'

import {RouterProvider} from "react-router";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {router} from "./router/router.tsx";
import type {IUser} from "./models/IUser.ts";


type UsersSliceTypa = {
    users:IUser[];
}

const initialState:UsersSliceTypa = {users:[]};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loadUsers:(state,action:PayloadAction<IUser[]>)=>{
            state.users = action.payload;
        }
    }
})
export const userSliceActions={...userSlice.actions}

const store = configureStore({
    reducer: {
        userSlice:userSlice.reducer,

    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
