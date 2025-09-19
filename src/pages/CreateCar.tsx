import {useForm} from "react-hook-form";
import type {ICar} from "../models/ICar.tsx";
import {addCar} from "../services/api.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator.ts";

export const CreateCar = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = (data: ICar) => {
        addCar(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <input type={'text'} {...register('brand')}/>
                <input type={'number'} {...register('price')}/>
                <input type={'number'} {...register('year')}/>

            </form>
        </>
    );
};