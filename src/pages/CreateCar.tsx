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
            <form onSubmit={handleSubmit(createHandler)} >
                <div>
                    <input type={'text'} {...register('brand')} placeholder="enter brand car"/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type={'number'} {...register('price')} placeholder="enter price car"/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type={'number'} {...register('year')} placeholder="enter year car"/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>save car</button>

            </form>
        </>
    );
};