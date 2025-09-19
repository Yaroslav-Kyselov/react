import axios from "axios";
import type {IUser} from "../model/IUser.ts";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {' Content-Type': 'application/json'},
});

axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    request.headers.set('XXX', 'YYYY');
    return request;
})

export const getAllUsers = async (): Promise<IUser> => {
    const {data} = await axiosInstance.get<IUser>("/users");
    return data;
}

// fetch('YOU_URLA', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         key1: 'value1',
//         key2: 'value2'
//     })
// })


// axiosInstance.interceptors.response.use((response) => {
//
//     console.log(response);
//     return response;
// })