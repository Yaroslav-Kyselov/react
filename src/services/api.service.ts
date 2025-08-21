import type {IUserResponseModel} from "../models/IUserResponsModel.ts";
import type {ICartResponseModel} from "../models/ICartResponsModel.ts";

const baseURL = 'https://dummyjson.com';

export const userService = {
    getAllUsers: async ():Promise<IUserResponseModel> =>{
       return  await fetch(baseURL+ '/users')
            .then(value => value.json())
    }
}
export const cartService = {
    getAllCarts:async (userId:string):Promise<ICartResponseModel>  => {
        return await fetch(baseURL + '/carts/user/' + userId)
            .then(value => value.json());
    }
}