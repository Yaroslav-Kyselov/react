import type {IReqResInResponse} from "../models/IReqResInRespons.ts";

export const getAllUsers = async (pg:string):Promise<IReqResInResponse> =>{

return  await fetch('https://reqres.in/api/users?page='+pg,{
    headers: {
        'x-api-key': 'reqres-free-v1'
    }})
    .then(value => value.json())


}