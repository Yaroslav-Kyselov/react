const baseURL = 'https://jsonplaceholder.typicode.com';

// export const userService={
//     getAllUsers:async ():Promise<IUser[]> => {
//         const users = await fetch(baseURL+'/users')
//             .then(response => response.json());
//         return users;
//     }
// }
// const postService={}
// const commentService={}


export const getAll = async <T>(endpoint: string) => {
    const responseResult = await fetch(`${baseURL}${endpoint}`)
        .then((response: Response) => response.json());
    return responseResult as T;
}