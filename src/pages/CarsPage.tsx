import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.ts";
import type {ICar} from "../models/ICar.tsx";

export const CarsPage = () => {

    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars)
        })
    }, []);


    return (
        <>
            {
                cars.map((car: ICar) => (
                    <div key={car.id}>
                        {car.id} - {car.brand}
                        {/*<p> {car.price} {car.year}</p>*/}
                    </div>
                ))
            }
        </>
    );
};